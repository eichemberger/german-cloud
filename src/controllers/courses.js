const fs = require('fs');
const path = require('path');
let courses = require('../data/courses.json');

function listAll(req, res) {
  res.render('courses/courses', {
    courses,
  });
}

function getById(req, res) {
  const courseId = +req.params.id;

  const course = courses.find((c) => c.id === courseId);

  res.render('courses/course', {
    course,
  });
}

function createView(req, res) {
  res.render('courses/create');
}

function create(req, res) {
  const course = req.body;

  course.id = new Date().getTime();
  course.price = +course.price;
  course.duration = +course.duration;
  course.stars = 0;

  courses.push(course);

  fs.writeFileSync(path.resolve(__dirname, '../data/courses.json'), JSON.stringify(courses));

  res.redirect('/cursos');
}

function deleteCourse(req, res) {
  const courseId = +req.params.id;

  courses = courses.filter((c) => c.id !== courseId);

  fs.writeFileSync(path.resolve(__dirname, '../data/courses.json'), JSON.stringify(courses));

  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  getById,
  create,
  deleteCourse,
};
