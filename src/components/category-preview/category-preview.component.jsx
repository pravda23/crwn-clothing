import { Routes, Route, Link } from "react-router-dom";
import Hats from "../../routes/categories-preview/categories-preview.component";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
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
