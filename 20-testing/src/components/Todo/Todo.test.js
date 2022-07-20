import { render, screen } from "@testing-library/react";
import userEvet from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByRole("textbox");
  });

  test("varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items).toHaveLength(3);
  });

  test("input ve button kontrolü", () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Inputa string girilince listeye eklenmeli", () => {
    const name = "Test";
    userEvet.type(input, name);
    userEvet.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
