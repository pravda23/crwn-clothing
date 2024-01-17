import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

// only required for useEffect learning purposes - see below
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

// every created context requires its own provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

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
