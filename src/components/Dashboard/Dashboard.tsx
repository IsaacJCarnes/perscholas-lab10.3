import { useState } from "react";

import type { FilterProps, ToDo } from "../../types";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";

import { filterToDos } from "../../utils/toDoUtils.ts";

import ToDoForm from "../ToDoForm/ToDoForm.tsx";
import ToDoFilter from "../ToDoFilter/ToDoFilter.tsx";
import ToDoList from "../ToDoList/ToDoList.tsx";

export default function Dashboard() {
  const { storageData, setStorageItem } = useLocalStorage();
  const toDos: Array<ToDo> = storageData.toDos ? storageData.toDos : [];

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

  const onEditSelect = (toDoIndex: number) => {
    setEditingID(toDoIndex);
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

  return (
    <div className="exampleSection">
      <nav>
        <h2>Todo App (Context API)</h2>
        <button>Switch to Light</button>
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
