// import components
import Todo from "./Todo";
import TodoSummary from "./TodoSummary";

// import MUI components
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

// import functionality
import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";

import { v4 as uuidv4 } from "uuid";

const TodoPanel = () => {
  const { todo, setTodo, todoList, setTodoList, showFlag } = useContext(TodoContext);
  const inputSubmitHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const todoObj = {
      value: todo,
      id,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, todoObj]);
    setTodo("");
  };
  const inputHandler = (e) => {
    setTodo(e.target.value);
  };
  let filteredTodos = [];
  const filterTodos = () => {
    if (showFlag === "completed") {
      filteredTodos = todoList.filter((todo) => todo.isCompleted === true);
    } else if (showFlag === "active") {
      filteredTodos = todoList.filter((todo) => todo.isCompleted === false);
    } else {
      filteredTodos = [...todoList];
    }
  };
  filterTodos();

  return (
    <div className="todoPanel">
      <form onSubmit={inputSubmitHandler}>
        <TextField fullWidth id="outlined-basic" onInput={inputHandler} label="Todo" value={todo} variant="outlined" />
      </form>
      <div className="todoList">
        <FormGroup>
          {filteredTodos.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </FormGroup>
      </div>
      <TodoSummary />
    </div>
  );
};
export default TodoPanel;
