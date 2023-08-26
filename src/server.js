const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(morgan('tiny'));
app.use(express.static('public'));

app.use('/', router);
app.use('/cursos', coursesRouter);

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
