import { useEffect, useState } from "react";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

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

  function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  }

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
