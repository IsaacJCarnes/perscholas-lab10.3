//import "./ToDoList.css";
import type { ToDoListProps } from "../../types";
import TaskItem from "./ToDoItem";
export default function TaskList(props: ToDoListProps) {
  return (
    <ul id="TaskList">
      {props.toDos.map((toDo, index) => (
        <TaskItem
          key={index}
          index={index}
          toDo={toDo}
          editing={index === props.editId}
          onStatusChange={props.onStatusChange}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ))}
    </ul>
  );
}
