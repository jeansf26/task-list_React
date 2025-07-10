import { useState } from "react";
import Input from "./Input.jsx";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={function enviar() {
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
          }
          props.addTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 px-4 py-2 rounded-md text-white font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
