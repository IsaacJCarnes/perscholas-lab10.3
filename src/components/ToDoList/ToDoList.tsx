import "./ToDoList.css";
import ToDoItem from "./ToDoItem";
import { useContext } from "react";
import { FilterContext, ToDoContext } from "../../context/AppProvider";
import { filterToDos } from "../../utils/toDoUtils";

export default function ToDoList() {
  const { toDos, clearCompleted } = useContext(ToDoContext);
  const { filter } = useContext(FilterContext);
  const filteredToDos = filterToDos(toDos, filter);
  const completedToDosAmount = toDos.filter(
    (toDO) => toDO["status"] == "completed",
  ).length;

  return toDos.length > 0 ? (
    <div id="ToDoList">
      {filteredToDos.length != 0 ? (
        <ul>
          {filteredToDos.map((toDo, index) => (
            <ToDoItem key={index} toDo={toDo} />
          ))}
        </ul>
      ) : filter["status"] === "active" ? (
        <div className="reminderText">No active todos. Well done!</div>
      ) : (
        <div className="reminderText">No completed todos yet.</div>
      )}
      <div id="ListToolbar">
        <div id="ItemsCounter">
          {toDos.length} {toDos.length == 1 ? "item" : "items"} left
        </div>
        {completedToDosAmount > 0 && (
          <button onClick={clearCompleted}>
            Clear Completed ({completedToDosAmount})
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="reminderText">No todos yet! Add one above.</div>
  );
}
