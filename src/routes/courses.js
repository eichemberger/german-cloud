const { Router } = require('express');
const { index } = require('../controllers/courses');

const router = Router();

router.get('/', index);

module.exports = router;
