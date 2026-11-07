import { useContext } from "react";

import { ThemeContext } from "./context/AppProvider.jsx";

import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm.jsx";
import ToDoFilter from "./components/ToDoFilter/ToDoFilter.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import ThemeButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="Dashboard" className={`exampleSection ${theme}`}>
      <nav>
        <h2>Todo App (Context API)</h2>
        <ThemeButton />
      </nav>
      <ToDoForm />
      <ToDoFilter />
      <ToDoList />
    </div>
  );
}

export default App;
