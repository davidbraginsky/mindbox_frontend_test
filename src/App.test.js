import { render, screen } from "@testing-library/react";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

describe("App", () => {
  it("displays header", () => {
    render(
      <TodoProvider>
        <App />
      </TodoProvider>
    );
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
  });
});
