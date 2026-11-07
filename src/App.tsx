import { useContext, useState } from "react";

import {
  ThemeContext,
  ToDoContext,
  FilterContext,
} from "./context/AppProvider.tsx";
import { filterToDos } from "./utils/toDoUtils.ts";

import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm.tsx";
import ToDoFilter from "./components/ToDoFilter/ToDoFilter.tsx";
import ToDoList from "./components/ToDoList/ToDoList.tsx";
import ThemeButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";

function App() {
  const { toDos, addTodo, toggleCompleted, deleteTodo, editTodo, clearCompleted } =
    useContext(ToDoContext);
  const { filter, setFilter } = useContext(FilterContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div id="Dashboard" className={`exampleSection ${theme}`}>
      <nav>
        <h2>Todo App (Context API)</h2>
        <ThemeButton lightMode={theme} toggleTheme={toggleTheme} />
      </nav>
      <ToDoForm addTodo={addTodo} />
      <ToDoFilter onFilterChange={setFilter} />
      <ToDoList
        toDos={toDos}
        toggleCompleted={toggleCompleted}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
