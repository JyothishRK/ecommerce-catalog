import ProductItem from "./product-item";
import classes from './products-grid.module.css';

function ProductsGrid(props) {
  const { products } = props;

  // Add a fallback if posts is undefined or not an array
  if (!products || !Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <ul className={classes.grid}>
      {products.map((products) => (
        <ProductItem key={products._id || Math.random()} product={products} />
      ))}
    </ul>
  );
}

export default ProductsGrid;
