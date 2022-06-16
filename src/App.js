// import components
import Heading from "./components/Heading";
import Todo from "./components/Todo";
import TodoSummary from "./components/TodoSummary";

// import MUI components
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

// import functionality
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import TodoContext from "./context/TodoContext";

function App() {
  const { todo, setTodo, todoList, setTodoList } = useContext(TodoContext);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

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

  return (
    <div className="container">
      <Heading title="todos" />
      <div className="todoPanel">
        <form onSubmit={inputSubmitHandler}>
          <TextField fullWidth id="outlined-basic" onInput={inputHandler} label="Todo" value={todo} variant="outlined" />
        </form>
        <div className="todoList">
          <FormGroup>
            {todoList.map((item) => (
              <Todo key={item.id} todo={item} />
            ))}
          </FormGroup>
        </div>
        <TodoSummary />
      </div>
    </div>
  );
}

export default App;
