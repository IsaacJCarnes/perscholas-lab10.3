import { useState, createContext } from "react";
import type { FilterProps, ToDo } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";
export const FilterContext = createContext(null);
export const ThemeContext = createContext(null);
export const ToDoContext = createContext(null);

export function AppProvider({ children }) {
  const { storageData, setStorageItem } = useLocalStorage();
  const toDos: Array<ToDo> = storageData.toDos ? storageData.toDos : [];

  const [toDoId, setToDoId] = useState(0);

  const addTodo = (text: string) => {
    const newToDos = [...toDos, { id: toDoId, title: text, status: "active" }];
    setToDoId(toDoId + 1);
    setStorageItem("toDos", newToDos);
  };
  const toggleTodo = (id: number) => {
    const newToDos = toDos.map((toDo) => {
      return toDo.id === id
        ? {
            ...toDo,
            status: toDo["status"] === "active" ? "completed" : "active",
          }
        : { ...toDo };
    });
    setStorageItem("toDos", newToDos);
  };
  const deleteTodo = (id: number) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setStorageItem("toDos", newToDos);
  };

  const editTodo = (id: number, newText: string) => {
    const newToDos = toDos.map((toDo) => {
      return toDo.id === id ? { ...toDo, title: newText } : { ...toDo };
    });
    setStorageItem("toDos", newToDos);
  };

  const clearCompleted = () => {
    const newToDos = toDos.filter((toDO) => toDO.status === "active");
    setStorageItem("toDos", newToDos);
  };

  const [filter, setFilter] = useState<FilterProps>({});

  const theme: string = storageData.theme ? storageData.theme : "light";

  function toggleTheme() {
    setStorageItem("theme", theme === "light" ? "dark" : "light");
  }

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      <FilterContext.Provider value={{ filter, setFilter }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </FilterContext.Provider>
    </ToDoContext.Provider>
  );
}
