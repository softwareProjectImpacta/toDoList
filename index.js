const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const mssql = require('./database/db');
const bodyParser = require('body-parser');
const app = express();
const TaskController = require('./controller/TaskController');
const port = 3000;
TaskController.connectToDatabase();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Back-end
app.get('/home', (req, res) => {
    res.render('index');
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'shared')));
app.use(routes)
app.listen(port, () => console.log(`Servidor rodando na porta:${port}`));


