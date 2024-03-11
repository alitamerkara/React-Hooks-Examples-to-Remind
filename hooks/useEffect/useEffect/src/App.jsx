import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10"
        );
        setCount(response.data.results);
        console.log(count[0]);
      } catch (error) {
        console.error("error");
      }
    };
    data();
  }, []);
  return (
    <>
      <div>
        {count.map((item) => {
          return <div>{item.question}</div>;
        })}
      </div>
    </>
  );
}

export default App;
