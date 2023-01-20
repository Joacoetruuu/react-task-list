import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      taskTitle: title,
      taskDescription: description,
    });
    setTitle("")
    setDescription("")
  };

  return (
    <div className="maw-md mx-auto">
      <form action="" className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tareas</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-50 p-3 w-full mb-2"

        />
        <textarea
          name=""
          placeholder="Descripcion de la tarea"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-50 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button
          className="bg-green-500 px-3 py-1 text-white"
        >Guardar tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
