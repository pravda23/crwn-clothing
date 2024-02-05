import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// every created context requires its own provider
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // below useEffect is a once-off method of writing data to firebase; commented out to avoid rerunning with every refresh, but retained for learning purposes; normally not done from front end

  // useEffect(() => {
  //   // function sets the desired category name to 'categories'
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// const [product, setProduct] = useState(PRODUCTS);
