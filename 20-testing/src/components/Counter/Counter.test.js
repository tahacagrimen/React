import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvet from "@testing-library/user-event";
import Counter from "./index";

// screen ile o an domda olan herhangi bir nesneyi yakalıyoruz.

describe("Counter tests", () => {
  let azaltBtn, arttirBtn, count;

  beforeEach(() => {
    render(<Counter />);
    azaltBtn = screen.getByText("Azalt");
    arttirBtn = screen.getByText("Arttir");
    count = screen.getByText("0");
  });

  test("arttir btn", () => {
    userEvet.click(arttirBtn);
    expect(count).toHaveTextContent("1");
  });

  test("azalt btn", () => {
    userEvet.click(azaltBtn);
    expect(count).toHaveTextContent("-1");
  });
});
