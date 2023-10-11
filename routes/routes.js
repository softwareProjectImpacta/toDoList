const routes = require("express").Router()
const TaskController = require("../controller/TaskController")


//routes.get("/home", TaskController.getAll)
routes.get('/tasks', async (req, res) => {
    try {
      const {status} = req.body;
      console.log(status);
      const tasks = await TaskController.listTasks();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  });
  
routes.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    try {
      await TaskController.addTask(title, description);
      res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao adicionar tarefa' });
    }
  });

module.exports = routes



