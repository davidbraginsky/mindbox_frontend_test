function App() {
  return (
    <div className="container">
      <h1>todos</h1>
      <div className="todoPanel">
        <div className="todoHeader">What needs to be done?</div>
        <div className="todoList">
          <div className="todo">
            <input type="checkbox" id="random-1" />
            <label htmlFor="random-1">Тестовое задание</label>
          </div>
          <div className="todo">
            <input type="checkbox" id="random-2" />
            <label htmlFor="random-2">Прекрасный код</label>
          </div>
          <div className="todo">
            <input type="checkbox" id="random-3" />
            <label htmlFor="random-3">Покрытие тестами</label>
          </div>
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
