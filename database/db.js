const express = require('express');
const mysql = require('mssql');
const bodyParser = require('body-parser');

const app = express();

// Configuração do MySQL
const db = mysql.createConnection({
    user: 'Project',
    password: 'Software#2023',
    server: 'projetosoftware.database.windows.net', // Pode ser no formato 'hostname\instancename' para instâncias nomeadas
    database: 'projeto_software',
    options: {
        encrypt: true // Se você estiver usando Azure, defina como true
    }
});

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Inicialização da conexão com o SQL Server
mssql.connect(config)
  .then(() => {
    console.log('Conectado ao SQL Server');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao SQL Server:', err);
  });

// Definindo um modelo para as tarefas
const Task = mssql.models.Task;

// Rotas da aplicação
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    console.error('Erro ao buscar tarefas:', err);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description });
    res.status(201).json({ message: 'Tarefa adicionada com sucesso!', id: task.id });
  } catch (err) {
    console.error('Erro ao adicionar tarefa:', err);
    res.status(500).json({ error: 'Erro ao adicionar tarefa' });
  }
});