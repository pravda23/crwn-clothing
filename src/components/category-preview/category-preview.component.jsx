import { Routes, Route } from "react-router-dom";
import Hats from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        {/* use span to avoid making the entire h2 clickable (100% width) */}

        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          // use underscore as a way of not using the first argument
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;
