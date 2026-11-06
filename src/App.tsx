import { useState } from "react";

import type { FilterProps, ToDo } from "./types";
import useLocalStorage from "./hooks/useLocalStorage.tsx";
import { filterToDos } from "./utils/toDoUtils.ts";

import ToDoForm from "./components/ToDoForm/ToDoForm.tsx";
import ToDoFilter from "./components/ToDoFilter/ToDoFilter.tsx";
import ToDoList from "./components/ToDoList/ToDoList.tsx";
import ThemeButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";
import "./App.css";

function App() {
  const { storageData, setStorageItem } = useLocalStorage();
  const toDos: Array<ToDo> = storageData.toDos ? storageData.toDos : [];
  const lightMode: string = storageData.lightMode
    ? storageData.lightMode
    : "light";

  const [editingID, setEditingID] = useState(-1);

  const [nextID, setNextID] = useState(0);
  const [filter, setFilter] = useState<FilterProps>({});

  const onStatusChange = (id: string, newStatus: string) => {
    const newToDos = toDos.map((toDo) =>
      toDo.id == id ? { ...toDo, status: newStatus } : toDo,
    ) as [ToDo];
    setStorageItem("toDos", newToDos);
  };

  const onDeleteSelect = (id: string) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setStorageItem("toDos", newToDos);
  };

  const onEditSelect = (id: string) => {
    setEditingID(Number(id));
  };

  const onAddToDo = (toDo: ToDo) => {
    setNextID((prevID) => {
      toDo["id"] = prevID.toString();
      return prevID + 1;
    });
    const newToDos = [...toDos, toDo];
    setStorageItem("toDos", newToDos);
  };

  const onEditToDo = (toDo: ToDo) => {
    const newToDos = toDos.map((t) => {
      return t.id === toDo.id ? { ...toDo } : { ...t };
    });
    setEditingID(-1);
    setStorageItem("toDos", newToDos);
  };

  const toggleTheme = () => {
    setStorageItem("lightMode", lightMode.includes("light") ? "dark" : "light");
  };

  return (
    <div id="Dashboard" className={`exampleSection ${lightMode}`}>
      <nav>
        <h2>Todo App (Context API)</h2>
        <ThemeButton lightMode={lightMode} toggleTheme={toggleTheme} />
      </nav>
      <ToDoForm
        onSubmitToDo={editingID > -1 ? onEditToDo : onAddToDo}
        nextId={String(nextID)}
      />
      <ToDoFilter onFilterChange={setFilter} />
      <ToDoList
        toDos={filterToDos(toDos, filter)}
        onStatusChange={onStatusChange}
        onDelete={onDeleteSelect}
        onEdit={onEditSelect}
        editId={editingID}
      />
    </div>
  );
}

export default App;
