import { BrowserRouter } from "react-router-dom";
import { NavList } from "./NavList";
import { Navigation } from "./Navigation";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "provider/AuthProvider";

describe("Navigation component", () => {
  const setUser = jest.fn();
  const user = "test user";
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user, setUser }}>
          <Navigation />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  });

  it("render logo and title", () => {
    expect(screen.getByText("Panel Admina")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("render all navigation buttons", () => {
    Object.values(NavList).forEach((btn) => {
      expect(screen.getByText(btn.text)).toBeInTheDocument();
    });
    expect(screen.getByText("Ustawienia")).toBeInTheDocument();
    expect(screen.getByText("Wyloguj się")).toBeInTheDocument();
  });

  it("user is logged out and navigation is not visible when there is click on log out button", () => {
    fireEvent.click(screen.getByText("Wyloguj się"));
    expect(setUser).toHaveBeenCalledWith("");
    expect(screen.getByText("Panel Admina")).toBeInTheDocument();
  });
});
