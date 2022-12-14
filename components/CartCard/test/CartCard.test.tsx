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

describe("CartCard Component", () => {
  const { item, count } = data;

  it("should display the correct count, name and price", () => {
    render(<CartCard item={item} count={count} />);
    expect(screen.getByDisplayValue(3)).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$1.00")).toBeInTheDocument();
  });
});
