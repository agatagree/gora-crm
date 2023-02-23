import { AlertMessage } from "./AlertMessage";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("AlertMessage component", () => {
  it("renders proper error alert when message prop is 404", () => {
    render(<AlertMessage message={404} />);
    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Przepraszamy, wystąpił błąd");
    const alertDescription = screen.getByText("Spróbuj później.");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("chakra-alert");
    expect(alertTitle).toBeInTheDocument();
    expect(alertDescription).toBeInTheDocument();
  });

  it("renders proper error alert when message prop is underConstruction", () => {
    render(<AlertMessage message={"underConstruction"} />);
    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Przepraszamy, strona w budowie.");
    const alertDescription = screen.queryByRole("alertDescription");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("chakra-alert");
    expect(alertTitle).toBeInTheDocument();
    expect(alertDescription).not.toBeInTheDocument();
  });

  it("renders proper error alert when message prop is pageNotFound", () => {
    render(<AlertMessage message={"pageNotFound"} />);
    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Ups!");
    const alertDescription = screen.getByText(
      "Strona o podanym adresie nie istnieje."
    );
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("chakra-alert");
    expect(alertTitle).toBeInTheDocument();
    expect(alertDescription).toBeInTheDocument();
  });
});
