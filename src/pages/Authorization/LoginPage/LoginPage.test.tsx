import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "provider/AuthProvider";

const mockToast = jest.fn();
jest.mock("@firebase/auth", () => {
  const originalModule = jest.requireActual("@firebase/auth");
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
  };
});

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");
  return {
    ...originalModule,
    useToast: () => mockToast,
  };
});

const setUser = jest.fn();
const user = "";

const TestComponent = () => (
  <BrowserRouter>
    <AuthContext.Provider value={{ user, setUser }}>
      <LoginPage />
    </AuthContext.Provider>
  </BrowserRouter>
);

describe("LoginPage", () => {
  it("should redirect user to dashboard after successful login", async () => {
    render(<TestComponent />);
    (signInWithEmailAndPassword as jest.Mocked<any>).mockResolvedValue();
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

  it("should redirect user to recovery password page after remind password button click", async () => {
    const user = userEvent.setup();
    render(<TestComponent />);
    await user.click(screen.getByRole("button", { name: /Przypomnij hasło/ }));
    expect(window.location.pathname).toEqual("/passwordRecovery");
  });

  it("shouldn't login user when API returns error", async () => {
    render(<TestComponent />);
    (signInWithEmailAndPassword as jest.Mocked<any>).mockRejectedValue({
      message: "INVALID_PASSWORD",
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj adres e-mail"), {
      target: { value: process.env.REACT_APP_TEST_EMAIL },
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj hasło"), {
      target: { value: "invalid password" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Zaloguj się" }));

    jest.advanceTimersByTime(1000);
    await waitFor(() => expect(user).toEqual(""));
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });
});
