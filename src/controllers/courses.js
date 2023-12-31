const {
  getPaginatedCourses,
  getAllCourses,
  searchCoursesByName,
} = require('../data/courses');
const { defaultValues } = require('../config/constants');
const courseService = require('../services/CourseService');

function searchCourses(req, res) {
  const page = req.query.page ? (+(req.query.page) - 1) : 0;
  const { search } = req.query;

  const courses = searchCoursesByName(search);
  const totalNumberOfCourses = courses.length;
  const numberOfPages = Math.ceil(totalNumberOfCourses / defaultValues.coursesPerPage);

  res.render('courses/courses', {
    courses,
    metadata: {
      numberOfPages,
      page: page + 1,
    },
  });
}

function listAll(req, res) {
  const { search } = req.query;

  if (search) {
    return searchCourses(req, res);
  }

  const page = req.query.page ? (+(req.query.page) - 1) : 0;
  const courses = getPaginatedCourses(page);
  const totalNumberOfCourses = getAllCourses().length;
  const numberOfPages = Math.ceil(totalNumberOfCourses / defaultValues.coursesPerPage);

  const hasCreatedNewCourse = req.session?.courseCreated || false;

  if (hasCreatedNewCourse) {
    res.locals.courseCreated = true;
    req.session.courseCreated = null;
  }

  return res.render('courses/courses', {
    courses,
    metadata: {
      numberOfPages,
      page: page + 1,
    },
  });
}

async function getById(req, res) {
  const id = +req.params.id;

  const course = await courseService.getById(id);
  res.render('courses/course', { course });
}

function createView(req, res) {
  res.render('courses/create');
}

function create(req, res) {
  courseService.save(req.body, req.file);
  req.session.courseCreated = true;

  res.redirect('/cursos');
}

async function editView(req, res) {
  const id = +req.params.id;
  const course = await courseService.getById(+id);

  res.render('courses/edit', { course });
}

function edit(req, res) {
  const id = +req.params.id;

  courseService.update(id, req.body, req.file);

  res.redirect('/cursos');
}

function deleteById(req, res) {
  courseService.deleteById(+req.params.id);

  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  getById,
  create,
  editView,
  edit,
  deleteById,
  searchCourses,
};
