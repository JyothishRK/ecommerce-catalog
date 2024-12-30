import classes from "./product-image.module.css";

function ProductImage(props) {
  const product = props.props.props.product;
  // console.log("", product);
  return (
    <div className={classes.imageContainer}>
      {/* <img src={product.image} alt={product.name} className={classes.productImage} /> */}
      <img
        src={product.image}
        alt={product.name}
        height = {450}
        width = {600}
        className={classes.productImage}
      />
    </div>
  );
}

export default ProductImage;
