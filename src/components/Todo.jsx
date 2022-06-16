import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = ({ todo }) => {
  const { setTodoList, todoList } = useContext(TodoContext);

  const markAsCompleted = (id) => {
    const copyTodos = [...todoList];
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    let newTodo = { ...todoList[todoIndex], isCompleted: !todoList[todoIndex].isCompleted };
    copyTodos[todoIndex] = newTodo;
    setTodoList(copyTodos);
  };

  return (
    <FormControlLabel
      className={todo.isCompleted ? "labelChecked" : null}
      control={
        <Checkbox
          onChange={() => {
            markAsCompleted(todo.id);
          }}
          checked={todo.isCompleted}
          color="success"
        />
      }
      label={todo.value}
    />
  );
};

export default Todo;
