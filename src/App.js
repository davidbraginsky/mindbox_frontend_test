import Heading from "./components/Heading";
import Todo from "./components/Todo";
import FormGroup from "@mui/material/FormGroup";
import { v4 as uuidv4 } from "uuid";

import { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const inputFormRef = useRef();

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const todoObj = {
      value: todo,
      id,
    };
    setTodoList((prev) => [...prev, todoObj]);
    inputFormRef.current.reset();
  };

  return (
    <div className="container">
      <Heading title="todos" />
      <div className="todoPanel">
        <form ref={inputFormRef} onSubmit={inputSubmitHandler}>
          <input onInput={inputHandler} type="text" placeholder="what needs to be done?" />
        </form>
        <div className="todoList">
          <FormGroup>
            {todoList.map((item) => (
              <Todo key={item.id} todo={item} />
            ))}
          </FormGroup>
        </div>
        <div className="todoSummary">
          <span>2 items left</span>
          <div className="todoFilterbox">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
          <span>Clear completed</span>
        </div>
      </div>
    </div>
  );
}

export default App;
