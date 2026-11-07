import { useContext } from "react";
import { ToDoContext } from "../../context/AppProvider";

export default function TaskItem({ toDo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(ToDoContext);
  const id = toDo.id;
  const isActive = toDo.status === "active";
  return (
    <li data-id={id} className="toDoItem">
      <input
        type="checkbox"
        checked={!isActive}
        onChange={() => toggleTodo(id)}
      />
      <div>{toDo.title}</div>
      <button onClick={() => editTodo(id)}>✏️</button>
      <button onClick={() => deleteTodo(id)}>🗑️</button>
    </li>
  );
}
