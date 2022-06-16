import { createContext } from "react";

import { useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  return <TodoContext.Provider value={{ todoList, setTodoList, todo, setTodo }}>{children}</TodoContext.Provider>;
}

export default TodoContext;
