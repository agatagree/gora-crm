import { BrowserRouter } from "react-router-dom";
import { PasswordRecovery } from "./PasswordRecovery";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "provider/AuthProvider";

const mockToast = jest.fn();
jest.mock("@firebase/auth", () => {
  const originalModule = jest.requireActual("@firebase/auth");
  return {
    ...originalModule,
    sendPasswordResetEmail: jest.fn(),
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
      <PasswordRecovery />
    </AuthContext.Provider>
  </BrowserRouter>
);

describe.only("PasswordRecovery", () => {
  it("should show toast when user typed correct e-mail", async () => {
    const user = userEvent.setup();
    render(<TestComponent />);
    (sendPasswordResetEmail as jest.Mocked<any>).mockResolvedValue();
    const input = screen.getByPlaceholderText("Podaj adres e-mail");

    await user.type(input, process.env.REACT_APP_TEST_EMAIL ?? "");
    await user.click(screen.getByRole("button", { name: /Szukaj/ }));
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
    jest.useRealTimers();
  });

  it("should show toast when API returns error", async () => {
    const user = userEvent.setup();
    render(<TestComponent />);
    (sendPasswordResetEmail as jest.Mocked<any>).mockRejectedValue({
      message: "INVALID_EMAIL",
    });
    const input = screen.getByPlaceholderText("Podaj adres e-mail");
    await user.type(input, "fake e-mail");
    await user.click(screen.getByRole("button", { name: /Szukaj/ }));
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });
});
