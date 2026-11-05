import type { ToDoStatus, ToDoItemProps } from "../../types";

export default function TaskItem(props: ToDoItemProps) {
  return (
    <li data-id={props.toDo.id} className="toDoItem">
      
    </li>
  );
}
