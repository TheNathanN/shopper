import React, { useState, createContext } from "react";
import { Categories, User } from "../helpers/types";

// Global State Variables
let error: boolean = false;
let setError: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let loading: boolean = false;
let setLoading: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let data: any;
let setData: React.Dispatch<any> = () => {};
let user: User | undefined;
let setUser: React.Dispatch<React.SetStateAction<User | undefined>> = () => {};
let currentCategory: string = "";
let setCurrentCategory: React.Dispatch<
  React.SetStateAction<Categories | "">
> = () => {};
let mobileMenu: boolean = false;
let setMobileMenu: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let cart: string[] | undefined;
let setCart: React.Dispatch<
  React.SetStateAction<string[] | undefined>
> = () => {};

//  The Global Context
export const AppContext = createContext({
  error,
  setError,
  loading,
  setLoading,
  data,
  setData,
  user,
  setUser,
  currentCategory,
  setCurrentCategory,
  mobileMenu,
  setMobileMenu,
  cart,
  setCart,
});

// The Context Setup with useState
export default function AppState(props: any) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<User | undefined>();
  const [currentCategory, setCurrentCategory] = useState<Categories | "">("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cart, setCart] = useState<string[] | undefined>();

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        data,
        setData,
        user,
        setUser,
        currentCategory,
        setCurrentCategory,
        mobileMenu,
        setMobileMenu,
        cart,
        setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
