import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  useMemo(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const newTodos = [];
    for (let i = 1; i <= 300; i++) {
      newTodos.push("todo " + i);
    }
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  }, []);

  const handleAllClick = () => {
    setFilteredTodos(todos);
  };

  const handleCompletedClick = () => {
    const completedTodos = todos.filter((item, index) => index % 2 === 1);
    setFilteredTodos(completedTodos);
  };

  const handleAvailableClick = () => {
    const availableTodos = todos.filter((item, index) => index % 2 === 0);
    setFilteredTodos(availableTodos);
  };

  return (
    <>
      <button onClick={handleAllClick}>All</button>
      <button onClick={handleCompletedClick}>Completed</button>
      <button onClick={handleAvailableClick}>Available</button>
      <button
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
      <hr />
      <ul>
        {filteredTodos.map((item, i) => {
          if (filteredTodos[0] == "todo 1") {
            return <li key={i}>{item}</li>;
          } else {
            return (
              <li key={i} className="overLine">
                {item}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
