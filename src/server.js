const express = require('express');
const router = require('./routes');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/cursos', coursesRouter);
app.use('/', router);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`[server]: running on port: ${PORT}`);
});
