import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoSummary = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const filteredTodoList = todoList.filter((item) => !item.isCompleted);

  const clearCompleted = () => {
    setTodoList(filteredTodoList);
  };
  return (
    <div className="todoSummary">
      <span>{filteredTodoList.length} items left</span>
      <div className="todoFilterbox">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <span className="completedElement" onClick={clearCompleted}>
        Clear completed
      </span>
    </div>
  );
};
export default TodoSummary;
