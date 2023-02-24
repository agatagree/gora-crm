import { InputForm } from "./InputForm";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input Form component", () => {
  test("renders input with proper placeholder", () => {
    render(
      <InputForm
        inputValue={"email"}
        inputPlaceholder={"Podaj adres e-mail"}
        inputLabel={"E-mail"}
        required
      />
    );
    expect(
      screen.getByPlaceholderText("Podaj adres e-mail")
    ).toBeInTheDocument();
  });

  test("allow the user to enter text", () => {
    const register = jest.fn();
    render(
      <InputForm
        inputValue={"email"}
        inputPlaceholder={"Podaj adres e-mail"}
        inputLabel={"E-mail"}
        required
        {...register("email")}
      />
    );
    fireEvent.change(screen.getByPlaceholderText("Podaj adres e-mail"), {
      target: { value: "example value" },
    });
    expect(register).toHaveBeenCalledWith("email");
  });
});
