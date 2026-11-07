import { useState, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const FilterContext = createContext(null);
export const ThemeContext = createContext(null);
export const ToDoContext = createContext(null);

export function AppProvider({ children }) {
  const { storageData, setStorageItem } = useLocalStorage();
  const toDos = storageData.toDos ? storageData.toDos : [];
  const nextId = toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 0;

  const addTodo = (text) => {
    const newToDos = [...toDos, { id: nextId, title: text, status: "active" }];
    setStorageItem("toDos", newToDos);
  };
  const toggleTodo = (id) => {
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
  const deleteTodo = (id) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setStorageItem("toDos", newToDos);
  };

  const editTodo = (id, newText) => {
    const newToDos = toDos.map((toDo) => {
      return toDo.id === id ? { ...toDo, title: newText } : { ...toDo };
    });
    setStorageItem("toDos", newToDos);
  };

  const clearCompleted = () => {
    const newToDos = toDos.filter((toDO) => toDO.status === "active");
    setStorageItem("toDos", newToDos);
  };

  const [filter, setFilter] = useState({});

  const theme = storageData.theme ? storageData.theme : "light";

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
