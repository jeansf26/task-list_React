import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function tasks(props) {

    //Hook para navegação entre páginas
  const navigate = useNavigate();


    //Método para ver detalhes da tarefa
  //Navega para a página de detalhes da tarefa com os parâmetros de título e descrição
  function seeDetails(task) {
    //Método seguro para navegar para a página de detalhes da tarefa
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    //Lista de tarefas
    //Renderiza cada tarefa como um item de lista com botões para ver detalhes e delet
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map(function (task) {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={
                " text-left bg-slate-400 text-white p-2 rounded-md w-full" +
                (task.completed ? " line-through" : "")
              }
            >
              {task.title}
            </button>

            <Button onClick={() => seeDetails(task)}>
              <ChevronRightIcon />
            </Button>

            <Button
              onClick={() => props.deleteTask(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default tasks;
