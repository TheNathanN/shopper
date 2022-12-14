import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app-state";
import { getAllProducts } from "../helpers/dataFetchers";

import Head from "next/head";
import Script from "next/script";
import ErrorComp from "../components/ErrorComp/ErrorComp";
import Loading from "../components/Loading/Loading";
import HomeComp from "../components/HomeComp/HomeComp";
import Nav from "../components/Nav/Nav";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import SigninModal from "../components/SigninModal/SigninModal";
import Cart from "../components/Cart/Cart";
import CartPopup from "../components/CartPopup/CartPopup";
import SigninPopup from "../components/SigninPopup/SigninPopup";

const Home: NextPage = () => {
  const context = useContext(AppContext);
  const {
    error,
    setError,
    loading,
    setLoading,
    setData,
    mobileMenu,
    showSignin,
    showCart,
    cartPop,
    signinPop,
  } = context;

  useEffect(() => {
    setLoading(true);
    getAllProducts(setData, setError);
    setLoading(false);
  }, [setData, setError, setLoading]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Audio Station</title>
        <meta name="description" content="A shop for all of your audio needs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/c4aa491b21.js"
        crossOrigin="anonymous"
      />

      {cartPop ? <CartPopup /> : signinPop && <SigninPopup />}

      <section
        className={styles["mobile-pos"]}
        style={mobileMenu ? { height: "100%" } : { height: "10em" }}
      >
        {showSignin && <SigninModal />}
        <Nav />
        {!mobileMenu ? <CategoryMenu /> : <MobileMenu />}
      </section>

      <main className={styles.main}>
        {error && <ErrorComp />}
        {loading && <Loading />}
        {!error && !loading ? !showCart ? <HomeComp /> : <Cart /> : ""}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
