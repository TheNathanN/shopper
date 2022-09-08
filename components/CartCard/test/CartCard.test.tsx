import { fireEvent, render, screen } from "@testing-library/react";
import CartCard from "../CartCard";
import "@testing-library/jest-dom";

const data = {
  item: {
    id: "abc123",
    name: "Test Product",
    image: {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    price: {
      formatted: "1.00",
    },
  },
  count: 3,
};

describe("CartCard", () => {
  const { item, count } = data;

  it("should display the correct count", async () => {
    render(<CartCard item={item} count={count} />);
    expect(screen.getByDisplayValue(3)).toBeInTheDocument();
  });

  it("should display the correct name", async () => {
    render(<CartCard item={item} count={count} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("should display the correct price", async () => {
    render(<CartCard item={item} count={count} />);
    expect(screen.getByText("$1.00")).toBeInTheDocument();
  });
});
