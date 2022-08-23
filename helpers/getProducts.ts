import { Dispatch, SetStateAction } from "react";

export const getProducts = async (
  setState: Dispatch<SetStateAction<undefined>>
) => {
  const res = await fetch("https://api.chec.io/v1/products", {
    headers: {
      "X-Authorization": process.env.NEXT_PUBLIC_TEST_KEY || "",
    },
  });
  const data = await res.json();
  setState(data);
};
