import { render, screen, fireEvent } from "@testing-library/react";
import TodoSummary from "../components/TodoSummary";
import { TodoProvider } from "../context/TodoContext";

describe("TodoSummary", () => {
  it("exists in UI", () => {
    render(
      <TodoProvider>
        <TodoSummary />
      </TodoProvider>
    );
    const linkElement = screen.getByText(/clear completed/i);
    expect(linkElement).toBeInTheDocument();
  });
});
