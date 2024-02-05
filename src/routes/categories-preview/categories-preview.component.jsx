import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

// useSelector enables the ability to extract specific values from the global store object; selectCategoryMap is a custom function which selects such data
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

{
  /* <Routes>
<Route path="/hats" element={<Hats />}>
  {title}
</Route>
</Routes> */
}
