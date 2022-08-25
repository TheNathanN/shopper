import { Dispatch, SetStateAction } from "react";

export const getProducts = async (
  setData: Dispatch<SetStateAction<undefined>>,
  setError: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const res = await fetch("https://api.chec.io/v1/products", {
      headers: {
        "X-Authorization": process.env.NEXT_PUBLIC_KEY || "",
      },
    });
    const data = await res.json();
    setData(data);
  } catch (err) {
    setError(true);
  }
};
