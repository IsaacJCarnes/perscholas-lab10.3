import type { ToDoStatus, ToDoItemProps } from "../../types";

export default function TaskItem({
  toDo,
  toggleTodo,
  onDelete,
  onEdit,
}: ToDoItemProps) {
  const id = toDo.id;
  const isActive = toDo.status === "active";
  return (
    <li data-id={id} className="toDoItem">
      <input
        type="checkbox"
        checked={!isActive}
        onClick={() => toggleTodo(id)}
      />
      <div>{toDo.title}</div>
      <button onClick={() => onEdit(id)}>✏️</button>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </li>
  );
}
