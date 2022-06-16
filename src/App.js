import Heading from "./components/Heading";
import Todo from "./components/Todo";
import FormGroup from "@mui/material/FormGroup";

function App() {
  return (
    <div className="container">
      <Heading title="todos" />
      <div className="todoPanel">
        <input type="text" placeholder="what needs to be done?" />
        <div className="todoList">
          <FormGroup>
            <Todo todo="go somewhere" />
            <Todo todo="go here" />
            <Todo todo="go there" />
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
