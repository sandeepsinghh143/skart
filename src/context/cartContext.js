// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   loadCartItems();
  // }, []);

  // const loadCartItems = async () => {
  //   let cart = await AsyncStorage.getItem('cart');
  //   cart = cart ? JSON.parse(cart) : [];
  //   setCart(cart);
  // };

  const addToCart = item => {
    const itemExists = cart.findIndex(cartItem => cartItem.id === item.id);
    if (itemExists === -1) {
      const newCart = [...cart, item];
      // await AsyncStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
      totalSum(newCart);
    }
  };

  const totalSum = cart => {
    let totalSum = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(totalSum);
  };

  const deleteItemFromCart = item => {
    let newCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(newCart);
    totalSum(newCart);
  };

  const value = {
    cart,
    setCart,
    addToCart,
    totalPrice,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
