import { render, screen } from "@testing-library/react";
import AppState from "../context/app-state";
import Home from "../pages";

describe('App', () => {
  it("shows the Add To Cart button", async () => {
    render(
      <AppState>
        <Home />
      </AppState>
    );
    expect(await screen.findByText("Add To Cart")).toBeInTheDocument();
  })
})