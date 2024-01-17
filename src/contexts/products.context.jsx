import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";

// only required for useEffect learning purposes - see below
// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

// every created context requires its own provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // below useEffect is a once-off method of writing data to firebase; commented out to avoid rerunning with every refresh, but retained for learning purposes; normally not done from front end

  // useEffect(() => {
  //   // function sets the desired category name to 'categories'
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// const [product, setProduct] = useState(PRODUCTS);
