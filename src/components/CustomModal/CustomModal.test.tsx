import { CustomModal } from "./CustomModal";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CustomModal component", () => {
  it("modal renders when isOpen is true", () => {
    render(
      <CustomModal
        onClose={() => {}}
        isOpen={true}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("modal do not renders when isOpen is false", () => {
    render(
      <CustomModal
        onClose={() => {}}
        isOpen={false}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls onClose when there is click on Close Button", () => {
    const handleClose = jest.fn();
    render(
      <CustomModal
        onClose={handleClose}
        isOpen={true}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const closeBtn = screen.getByLabelText("Close");
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when there is click on Submit Button", () => {
    const handleClose = jest.fn();
    render(
      <CustomModal
        onClose={handleClose}
        isOpen={true}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const submitBtn = screen.getByText("Test Btn");
    fireEvent.click(submitBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("modal do not close when there is click on overlay", () => {
    const handleClose = jest.fn();
    render(
      <CustomModal
        onClose={handleClose}
        isOpen={true}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it("modal renders with proper title, content", () => {
    render(
      <CustomModal
        onClose={() => {}}
        isOpen={true}
        title="Test title"
        submitBtnLabel="Test Btn"
      >
        <p>test child</p>
      </CustomModal>
    );
    const modal = screen.getByRole("dialog");
    const modalTitle = screen.getByText("Test title");
    const modalContent = screen.getByText("test child");

    expect(modal).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });
});
