import "./ToDoList.css";
import type { ToDoListProps } from "../../types";
import ToDoItem from "./ToDoItem";
export default function ToDoList({
  toDos,
  editId,
  onStatusChange,
  onDelete,
  onEdit,
}: ToDoListProps) {
  return (
    <div id="ToDoList">
      <ul>
        {toDos.map((toDo, index) => (
          <ToDoItem
            key={index}
            toDo={toDo}
            editing={index === editId}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
      <div id="ItemsCounter">{toDos.length} {toDos.length == 1 ? "item" : "items"} left</div>
    </div>
  );
}
