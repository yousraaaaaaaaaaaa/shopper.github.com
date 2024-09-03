import  React,{ createContext, useState } from "react";

import all_product from '../Components/Assets/all_product'
export  const ShopContext = createContext(null) 
   const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (productId, size) => {
    const key = `${productId}-${size}`; // Unique key combining productId and size
    setCartItems((prevItems) => ({
      ...prevItems,
      [key]: {
        ...prevItems[key],
        quantity: prevItems[key]?.quantity + 1 || 1,
        size: size,
        productId: productId,
      },
    }));
  };

  const removeFromCart = (productId, size) => {
    const key = `${productId}-${size}`;
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[key]) {
        if (updatedItems[key].quantity > 1) {
          updatedItems[key].quantity -= 1;
        } else {
          delete updatedItems[key];
        }
      }
      return updatedItems;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const item = cartItems[key];
      const product = all_product.find((p) => p.id === item.productId);
      if (product) {
        totalAmount += product.new_price * item.quantity;
      }
    }
    return totalAmount;
  };
const getNbCartItems = () => {
  let totalNb = 0;

  for (const item in cartItems) {
    if (cartItems[item] && cartItems[item].quantity) {
      totalNb += cartItems[item].quantity;
    }
  }

  return totalNb;
};

  const contextValue = {
    getNbCartItems,
    getTotalAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;