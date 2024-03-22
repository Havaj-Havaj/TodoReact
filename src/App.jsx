import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Lister from "./components/Lister";
import './index.css'

const url = "http://localhost:3001/data";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const getTodo = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setTodo(data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getTodo();
  }, [todo]);

  const hendleDel = (id) => {
    fetch(`http://localhost:3001/data/${id}`, {
      method: "DELETE",
      header: { "Content-Type": "application/json" },
    });
  };

  const hendleadd = () => {
    if (text) {
      fetch(url, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: new Date(),
          text: text,
          completed: false,
        }),
      }).then((res) => res.json());
      setText("");
    }
  };

  
 
  return (
    <div className="main">
      <Header /> 
      <Form text={text} setText={setText} addBut={hendleadd} />
      {todo.map((item) => (
        <Lister
          id={item.id}
          key={item.id}
          texr={item.text}
          delBut={() => hendleDel(item.id)}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default App;
