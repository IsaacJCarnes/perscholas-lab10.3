import type { ToDoStatus, ToDoItemProps } from "../../types";

export default function TaskItem({
  editing,
  toDo,
  onStatusChange,
  onDelete,
  onEdit,
}: ToDoItemProps) {
  const id = toDo.id;
  const isActive = toDo.status.includes("active");
  return (
    <li data-id={id} className="toDoItem">
      <input
        type="checkbox"
        checked={!isActive}
        onClick={() => onStatusChange(id, isActive ? "completed" : "active")}
      />
      <div>{toDo.title}</div>
      <button onClick={() => onEdit(id)}>✏️</button>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </li>
  );
}
