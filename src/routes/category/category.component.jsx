import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  // takes category name from URL parameter
  const { category } = useParams();
  console.log("render/re-rendering category component");
  // useSelector transforms categories array
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
    // updates products when category url parameter changes (user navigation) or when categoriesMap updates
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* conditionally rendered while awaiting async function call on categoriesMap; only displays when products is no longer undefined */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
