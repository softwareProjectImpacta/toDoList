import React from "react";
import ReactDOM from "react-dom";

// Define o componente TaskList
const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id_tarefa}>
        ID: {task.id_tarefa}, Nome: {task.nm_tarefa}
      </li>
    ))}
  </ul>
);

const tasks = [
  { id_tarefa: 1, nm_tarefa: "Tarefa 1" },
  { id_tarefa: 2, nm_tarefa: "Tarefa 2" },
  { id_tarefa: 3, nm_tarefa: "Tarefa 3" },
  { id_tarefa: 4, nm_tarefa: "Tarefa 4" },
  { id_tarefa: 5, nm_tarefa: "Tarefa 5" },
  { id_tarefa: 6, nm_tarefa: "Tarefa 6" },
  { id_tarefa: 7, nm_tarefa: "Tarefa 7" },
  { id_tarefa: 8, nm_tarefa: "Tarefa 8" },
  { id_tarefa: 9, nm_tarefa: "Tarefa 9" },
  { id_tarefa: 10, nm_tarefa: "Tarefa 10" },

];

ReactDOM.render(<TaskList tasks={tasks} />, document.getElementById("root"));