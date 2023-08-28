const { Router } = require('express');
const {
  listAll,
  createView,
  create,
  getById,
  deleteCourse,
} = require('../controllers/courses');

const router = Router();

router.get('/crear', createView);
router.get('/:id', getById);
router.get('/', listAll);

router.post('/', create);
router.post('/eliminar/:id', deleteCourse);
router.post('/:id', deleteCourse);

module.exports = router;
