import React, { useState, createContext } from "react";
import { Categories } from "../helpers/types";

// Global State Variables
let error: boolean = false;
let setError: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let loading: boolean = false;
let setLoading: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let data: any;
let setData: React.Dispatch<any> = () => {};
let user: string | undefined;
let setUser: React.Dispatch<
  React.SetStateAction<string | undefined>
> = () => {};
let currentCategory: string = "";
let setCurrentCategory: React.Dispatch<
  React.SetStateAction<Categories | "">
> = () => {};
let mobileMenu: boolean = false;
let setMobileMenu: React.Dispatch<React.SetStateAction<boolean>> = () => {};

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
  setMobileMenu
});

// The Context Setup with useState
export default function AppState(props: any) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<string | undefined>();
  const [currentCategory, setCurrentCategory] =
    useState<Categories | "">("");
  const [mobileMenu, setMobileMenu] = useState(false);

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
        setMobileMenu
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
