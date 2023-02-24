import { BrowserRouter } from "react-router-dom";
import { LogOutIcon } from "components/Icons";
import { NavButton } from "./NavButton";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe.only("NavButton component", () => {
  const testClick = jest.fn();
  it("should render button with defined props", () => {
    render(
      <BrowserRouter>
        <NavButton
          text={"test"}
          logo={<LogOutIcon data-testid={"icon-test"} />}
          onClick={testClick}
          linkTo={"testLink"}
        />
      </BrowserRouter>
    );
    const testedLink = screen.getByRole("link");
    expect(testedLink).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByTestId("icon-test")).toBeInTheDocument();
    fireEvent.click(testedLink);
    expect(testClick).toHaveBeenCalledTimes(1);
    expect(window.location.pathname).toEqual("/testLink");
  });
});
