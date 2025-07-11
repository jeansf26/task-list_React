import { useEffect, useState } from "react";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import { v4 } from "uuid";

function App() {
  //Estado para armazenar as tarefas
  //Utiliza o localStorage para persistir os dados
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //useEffect funciona realizando função a cada alteração de uma lista
  //Neste caso, salva as tarefas no localStorage sempre que houver uma alteração
  useEffect(
    function save() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  //API para buscar tarefas
  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   }
  //   fetchTasks();
  // }, []);


  //Muda o estado de uma tarefa para concluída ou não
  //Recebe o ID da tarefa clicada e altera o estado dela
  function onTaskClick(taskId) {
    const newtasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    setTasks(newtasks);
  }

  //Deleta uma tarefa
  //Recebe o ID da tarefa a ser deletada e filtra a lista de tarefas
  function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  }

  //Adiciona uma nova tarefa
  //Recebe o título e a descrição da tarefa, cria um novo objeto de tarefa e
  //adiciona à lista de tarefas
  function addTask(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
