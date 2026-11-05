import { useState } from "react";
import type { ToDoFormProps } from "../../types";

export default function ToDoForm({ onSubmitToDo, nextId }: ToDoFormProps) {
  const [title, setTitle] = useState<string>("");

  const submitToDo = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title) return;
    onSubmitToDo({ id: nextId, title, status: "active" });
    setTitle("");
  };

  return (
    <form onSubmit={submitToDo} id="ToDoForm">
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
