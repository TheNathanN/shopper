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
let cart: { [id: string]: number } | undefined;
let setCart: React.Dispatch<
  React.SetStateAction<{ [id: string]: number } | undefined>
> = () => {};
let showSignin: boolean = false;
let setShowSignin: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let showCart: boolean = false;
let setShowCart: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let cartCount: number = 0;
let setCartCount: React.Dispatch<React.SetStateAction<number>> = () => {};
let cartPop: boolean = false;
let setCartPop: React.Dispatch<React.SetStateAction<boolean>> = () => {};
let signinPop: boolean = false;
let setSigninPop: React.Dispatch<React.SetStateAction<boolean>> = () => {};

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
  showSignin,
  setShowSignin,
  showCart,
  setShowCart,
  cartCount,
  setCartCount,
  cartPop,
  setCartPop,
  signinPop,
  setSigninPop,
});

// The Context Setup with useState
export default function AppState(props: any) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [user, setUser] = useState<User | undefined>();
  const [currentCategory, setCurrentCategory] = useState<Categories | "">("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cart, setCart] = useState<{ [id: string]: number } | undefined>();
  const [showSignin, setShowSignin] = useState<boolean>(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartPop, setCartPop] = useState(false);
  const [signinPop, setSigninPop] = useState(false);

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
        showSignin,
        setShowSignin,
        showCart,
        setShowCart,
        cartCount,
        setCartCount,
        cartPop,
        setCartPop,
        signinPop,
        setSigninPop,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
