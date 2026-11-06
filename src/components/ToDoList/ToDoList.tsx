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
  const completedToDosAmount = toDos.filter((toDO) =>
    toDO.status.includes("completed"),
  ).length;

  return toDos.length > 0 ? (
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
      <div id="ListToolbar">
        <div id="ItemsCounter">
          {toDos.length} {toDos.length == 1 ? "item" : "items"} left
        </div>
        {completedToDosAmount > 0 && (
          <button>Clear Completed ({completedToDosAmount})</button>
        )}
      </div>
    </div>
  ) : (
    <div className="reminderText">No todos yet! Add one above.</div>
  );
}
