import { useState } from "react";
import type { ToDoFormProps } from "../../types";

export default function ToDoForm({ addTodo }: ToDoFormProps) {
  const [title, setTitle] = useState<string>("");

  const submitForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm} id="ToDoForm">
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}
