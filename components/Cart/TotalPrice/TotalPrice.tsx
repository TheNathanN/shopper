import styles from './TotalPrice.module.scss';
import React, {useContext} from 'react';
import { AppContext } from '../../../context/app-state';

interface Props {
  cartItems: any;
}

const TotalPrice = ({cartItems}: Props) => {
  const context = useContext(AppContext);
  const { cart } = context;

  const totalPrice = () => {
    let price: number = 0;
    if (cart) {
      for (const [key, value] of Object.entries(cart)) {
        const currentItem = cartItems.filter((item: any) => item.id === key);
        const total = currentItem[0].price.raw * value;
        price += total;
      }
    }
    return `$${Number(price.toFixed(2)).toLocaleString()}`;
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>TotalPrice</p>
      <p className={styles.price}>{totalPrice()}</p>
    </div>
  )
}

export default TotalPrice