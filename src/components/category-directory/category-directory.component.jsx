import DirectoryItem from "../directory-item/directory-item.component";
import "./category-directory.styles.scss";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="category-directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
