import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";
import { TodoProvider } from "../context/TodoContext";

const markAsCompleted = jest.fn();

describe("Todo", () => {
  it("renders passed todo on screen", () => {
    const todoObj = { id: 123, value: "random string" };
    render(
      <TodoProvider>
        <Todo todo={todoObj} />
      </TodoProvider>
    );
    const linkElement = screen.getByText(/random string/i);
    expect(linkElement).toBeInTheDocument();
  });

  // it("marks input as completed when user clicks on it", () => {
  //   const todoObj = { id: 123, value: "random string", isCompleted: false };
  //   render(
  //     <TodoProvider>
  //       <Todo todo={todoObj} />
  //     </TodoProvider>
  //   );
  //   const linkElement = screen.getByText(/random string/i);
  //   // fireEvent.click(linkElement);
  //   // expect(labelElement).toHaveClass("labelChecked");
  //   // const linkElement = screen.getByText(/random string/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
