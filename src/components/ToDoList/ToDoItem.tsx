import type { ToDoStatus, ToDoItemProps } from "../../types";

export default function TaskItem({
  editing,
  toDo,
  onStatusChange,
  onDelete,
  onEdit,
}: ToDoItemProps) {
  const id = String(toDo.id);
  return (
    <li data-id={toDo.id} className="toDoItem">
      <input type="checkbox" />
      <div>{toDo.title}</div>
      <button onClick={() => onEdit(id)}>✏️</button>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </li>
  );
}
