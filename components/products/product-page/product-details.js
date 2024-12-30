import classes from "./product-details.module.css";

function ProductDetails(props) {
  const product = props.product.props.product;
  // console.log(props.product.props.product);
  return (
    <div className={classes.detailsContainer}>
      <h1 className={classes.productName}>{product.name}</h1>
      <p className={classes.productDescription}>{product.description}</p>
      <p className={classes.productPrice}>${product.price}</p>
      <p className={classes.productCategory}>Category: {product.category}</p>
      <button
        className={classes.addToCartButton}
        onClick={() => alert(`Added ${product.name} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
