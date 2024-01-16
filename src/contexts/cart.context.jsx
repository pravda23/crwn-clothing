import { useState, createContext, useEffect } from "react";

// helper function to INCREMENT/UPDATE product
const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return NEW array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// helper function to DECREMENT/REMOVE product
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find cart items to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // if quantity is equal to 1, remove from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return existing cart items
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? // why use {} to return new object (below)? Only by returning a new object instead of the existing cartItem will React trigger a refresh
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // monitors for changes in cartItems and updates number of items in cart (cartCount)
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // addItemToCart uses addCartItem helper function (above) to either add a product to cart OR check for existing product and increment quantity by 1
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// CartContext object data shape:

// product {
//   id,
//   name,
//   price,
//   imageUrl
// }

// cart item {
//   id,
//   name,
//   price,
//   imageUrl,
//   quantity
// }
