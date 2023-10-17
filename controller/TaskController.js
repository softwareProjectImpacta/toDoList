const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Configuração do MSSQL
const config = ({
    user: 'Project',
    password: 'Software#2023',
    server: 'projetosoftware.database.windows.net', // Pode ser no formato 'hostname\instancename' para instâncias nomeadas
    database: 'projeto_software',
    options: {
        encrypt: true // Se você estiver usando Azure, defina como true
    }
});

async function connectToDatabase() {
  try {
    await mssql.connect(config);
    console.log('Conectado ao SQL Server no Azure-async');
  } catch (err) {
    console.error('Erro ao conectar ao SQL Server:', err);
  }
  try {
    const result = await mssql.query('SELECT * FROM dbo.lista_tarefas');
    console.log(result);
    return result.recordset;
  } catch (err) {
    console.error('Erro ao buscar tarefas:', err);
    throw err;
  }
}

// Função para listar tarefas
async function listTasks() {
  try {
    await mssql.connect(config);
    const result = await mssql.query('SELECT * FROM dbo.lista_tarefas');
    return result.recordset;
  } catch (err) {
    console.error('Erro ao buscar tarefas:', err);
    throw err;
  }
}

// Função para adicionar uma nova tarefa
async function addTask(nm_tarefa, id_usuario) {
  try {
    await mssql.connect(config);
    const result = await mssql.query`INSERT INTO dbo.lista_tarefas (nm_tarefa, id_usuario) VALUES (${nm_tarefa}, ${id_usuario})`;
    return result;
  } catch (err) {
    console.error('Erro ao adicionar tarefa:', err);
    throw err;
  }
}
// Função para deletar uma tarefa
async function deleteTask(id_tarefa) {
  try {
    await mssql.connect(config);
    const result = await mssql.query`DELETE FROM dbo.lista_tarefas WHERE id_tarefa = ${id_tarefa}`;
    return result;
  } catch (err) {
    console.error('Erro ao excluir tarefa:', err);
    throw err;
  }
}

module.exports = {
  connectToDatabase,
  listTasks,
  addTask,
  deleteTask,
};
