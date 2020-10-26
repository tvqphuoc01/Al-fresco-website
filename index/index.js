const express = require('express');
const app = express();
const port = 3000;

app.use('/img', express.static('img'));
app.use(express.static('css'));
app.use('/font', express.static('font'));
app.use('/js', express.static('js'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
