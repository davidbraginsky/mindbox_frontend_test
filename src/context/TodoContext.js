import { createContext } from "react";

import { useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [showFlag, setShowFlag] = useState("");

  return <TodoContext.Provider value={{ todoList, setTodoList, todo, setTodo, showFlag, setShowFlag }}>{children}</TodoContext.Provider>;
}

export default TodoContext;
