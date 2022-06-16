import { render, screen } from "@testing-library/react";
import Heading from "../components/Heading";
import { TodoProvider } from "../context/TodoContext";

describe("Heading", () => {
  it("renders passed prop title", () => {
    render(
      <TodoProvider>
        <Heading title='random string' />
      </TodoProvider>
    );
    const linkElement = screen.getByText(/random string/i);
    expect(linkElement).toBeInTheDocument();
  });
});
