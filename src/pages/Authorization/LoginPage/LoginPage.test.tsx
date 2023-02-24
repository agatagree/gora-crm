import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AuthContext } from "provider/AuthProvider";

describe("LoginPage component", () => {
  const setUser = jest.fn();
  const user = "";
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user, setUser }}>
          <LoginPage />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  });

  it("validated user redirects to dashboard page after successful login", async () => {
    fireEvent.change(screen.getByPlaceholderText("Podaj adres e-mail"), {
      target: { value: process.env.REACT_APP_TEST_EMAIL },
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj hasło"), {
      target: { value: process.env.REACT_APP_TEST_PASSWORD },
    });
    fireEvent.click(screen.getByRole("button", { name: "Zaloguj się" }));
    await waitFor(() =>
      expect(setUser).toHaveBeenCalledWith(process.env.REACT_APP_TEST_EMAIL)
    );
    await waitFor(() => expect(window.location.pathname).toEqual("/dashboard"));
  });

  it("Przypomnij hasło button redirect to recovery page", () => {
    fireEvent.click(screen.getByRole("button", { name: "Przypomnij hasło" }));
    expect(window.location.pathname).toEqual("/passwordRecovery");
  });

  it("user not login when wrong password", async () => {
    fireEvent.change(screen.getByPlaceholderText("Podaj adres e-mail"), {
      target: { value: process.env.REACT_APP_TEST_EMAIL },
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj hasło"), {
      target: { value: "invalid password" },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Zaloguj się" }));
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await waitFor(() => expect(user).toEqual(""));
  });
});
