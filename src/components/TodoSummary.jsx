import { useContext, useRef } from "react";
import TodoContext from "../context/TodoContext";

const TodoSummary = () => {
  const { todoList, setTodoList, setShowFlag } = useContext(TodoContext);
  const filteredTodoList = todoList.filter((item) => !item.isCompleted);

  const clearCompleted = () => {
    setTodoList(filteredTodoList);
  };

  const allFilterRef = useRef();
  const activeFilterRef = useRef();
  const completedFilterRef = useRef();

  const clearAllFilters = () => {
    completedFilterRef.current.classList.remove("selected");
    activeFilterRef.current.classList.remove("selected");
    allFilterRef.current.classList.remove("selected");
  };

  const changeTodoVisibility = (e) => {
    const type = e.target.innerText.toLowerCase();
    if (type === "completed") {
      setShowFlag("completed");
      clearAllFilters();
      completedFilterRef.current.classList.add("selected");
    } else if (type === "active") {
      setShowFlag("active");
      clearAllFilters();
      activeFilterRef.current.classList.add("selected");
    } else {
      setShowFlag("all");
      clearAllFilters();
      allFilterRef.current.classList.add("selected");
    }
  };
  return (
    <div className="todoSummary">
      <span>{filteredTodoList.length} items left</span>
      <div className="todoFilterbox">
        <span className="selected" ref={allFilterRef} onClick={changeTodoVisibility}>
          All
        </span>
        <span ref={activeFilterRef} onClick={changeTodoVisibility}>
          Active
        </span>
        <span ref={completedFilterRef} onClick={changeTodoVisibility}>
          Completed
        </span>
      </div>
      <span className="completedElement" onClick={clearCompleted}>
        Clear completed
      </span>
    </div>
  );
};
export default TodoSummary;
