import { useContext, useState } from "react";
import { ToDoContext } from "../../context/AppProvider";

export default function ToDoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(ToDoContext);

  const submitForm = (e) => {
    e.preventDefault();
    if (!title) return;
    console.log("adding to do")
    addTodo(title);
    setTitle("")
  };

  return (
    <form onSubmit={(e) => submitForm(e)} id="ToDoForm">
      <input
        name="title"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}
