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
  const { theme } = useContext(ThemeContext);
  
  return (
    <div id="Dashboard" className={`exampleSection ${theme}`}>
      <nav>
        <h2>Todo App (Context API)</h2>
        <ThemeButton/>
      </nav>
      <ToDoForm/>
      <ToDoFilter />
      <ToDoList />
    </div>
  );
}

export default App;
