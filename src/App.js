// import components
import Heading from "./components/Heading";
import TodoPanel from "./components/TodoPanel";

function App() {
  return (
    <div className="container">
      <Heading title="todos" />
      <TodoPanel />
    </div>
  );
}

export default App;
