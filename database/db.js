const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');
const app = express();

// Configuração do MSSQL
const config = {
   user: 'Project',
   password: 'Software#2023',
   server: 'projetosoftware.database.windows.net', // Pode ser no formato 'hostname\instancename' para instâncias nomeadas
   database: 'projeto_software',
   options: {
       encrypt: true // Se você estiver usando Azure, defina como true
   }
}

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Inicialização da conexão com o SQL Server
mssql.connect(config)
 .then(() => {
   console.log('Conectado ao SQL Server-db.js');
 })
 .catch((err) => {
   console.error('Erro ao conectar ao SQL Server:', err);
 });
