import styles from '../styles/ProductId.module.scss'
import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AppContext } from '../context/app-state';
import { getAllProducts } from '../helpers/dataFetchers';
import CartPopup from '../components/CartPopup/CartPopup';
import SigninPopup from '../components/SigninPopup/SigninPopup';
import SigninModal from '../components/SigninModal/SigninModal';
import Nav from '../components/Nav/Nav';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import AddToCartBtn from '../components/AddToCartBtn/AddToCartBtn';

const ProductPage = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const { data, cartPop, signinPop, showSignin, mobileMenu, setCurrentCategory, setLoading, setData, setError } = context;
  const { product_id } = router.query;
  const item = data !== undefined ? data.data.filter((product: any) => product.id === product_id) : '';

  useEffect(() => { 
    if (!data) {
      setLoading(true);
      getAllProducts(setData, setError);
      setLoading(false);
    }
    setCurrentCategory('');
  }, [setCurrentCategory, setLoading, setData, setError, data]);

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
        style={mobileMenu ? { height: "100vh", overflow: 'hidden' } : { height: "10em" }}
      >
        {showSignin && <SigninModal />}
        <Nav />
        {!mobileMenu ? <CategoryMenu /> : <MobileMenu />}
      </section>

      {!mobileMenu && item[0] && <main className={styles.main}>
        <Image src={item[0].image.url} alt={item[0].name} width={'100%'} height={'100%'} />
        <h1>{item[0].name}</h1>
        
        <div className={styles['price-container']}>
          <p>Price:</p>
          <p className={styles.price}>${item[0].price.formatted}</p>
        </div>

        <AddToCartBtn info={item[0]} />

        <p className={styles.description}>{item[0].description.replaceAll('<p>', '').replaceAll('</p>', '')}</p>

        <AddToCartBtn info={item[0]} />
      </main>}
    </div>
  )
}

export default ProductPage;