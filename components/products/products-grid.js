import ProductItem from "./product-item";
import classes from './products-grid.module.css';

function ProductsGrid(props) {
  const { products } = props;

  if (!products || !Array.isArray(products)) {
    return (
      <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
        No products available at the moment.
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
        No products found matching your search.
      </div>
    );
  }

  return (
    <ul className={classes.grid}>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default ProductsGrid;
