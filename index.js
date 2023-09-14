HEAD
const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const app = express();
const port = 3000;

//Back-end

app.get('/home', (req, res) => {
    res.render('index');
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'shared')));
app.use(routes)
app.listen(port, () => console.log(`Servidor rodando em:${port}`));
