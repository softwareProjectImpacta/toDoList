const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

//routes.get("/home", TaskController.getAll)
// Rota para buscar todas as tarefas
routes.get("/tasks", async (req, res) => {
  try {
    const { status } = req.body;
    console.log(status);
    const tasks = await TaskController.listTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// Rota para adicionar uma nova tarefa
routes.post("/tasks", async (req, res) => {
  const { title, user } = req.body;
  try {
    await TaskController.addTask(title, user);
    res.status(201).json({ message: "Tarefa adicionada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar tarefa" });
  }
});

// Rota para excluir uma tarefa com base em seu ID
routes.post("/tasks/:taskId", async (req, res) => {
  const id_tarefa = req.body.id_tarefa;
  try {
    await TaskController.deleteTask(id_tarefa);
    res.status(200).json({ message: "Tarefa excluída com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao excluir tarefa" });
  }
});

module.exports = routes;
