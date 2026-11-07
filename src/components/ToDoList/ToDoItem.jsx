import { useContext, useRef, useEffect } from "react";
import { ToDoContext } from "../../context/AppProvider";

export default function TaskItem({ toDo, isEditing, setEditingID }) {
  const inputRef = useRef(null);
  const { toggleTodo, deleteTodo, editTodo } = useContext(ToDoContext);
  const id = toDo.id;
  const isActive = toDo.status === "active";

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  return isEditing ? (
    <li data-id={id} className="toDoItem">
      <input
        ref={inputRef}
        type="text"
        value={toDo.title}
        onChange={(e) => editTodo(id, e.target.value)}
        onBlurCapture={(e) => setEditingID(-1)}
      />
    </li>
  ) : (
    <li data-id={id} className="toDoItem">
      <input
        type="checkbox"
        checked={!isActive}
        onChange={() => toggleTodo(id)}
      />
      <div>{toDo.title}</div>
      <button onClick={() => setEditingID(id)}>✏️</button>
      <button onClick={() => deleteTodo(id)}>🗑️</button>
    </li>
  );
}
