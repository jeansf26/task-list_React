import { ChevronRightIcon, TrashIcon } from "lucide-react";

function tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map(function (task) {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className= {' text-left bg-slate-400 text-white p-2 rounded-md w-full' + (task.completed ? ' line-through' : '')}>
              {task.title}
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button onClick={() => props.deleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default tasks;
