import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders contact me", () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact me/i);
  expect(linkElement).toBeInTheDocument();
});
