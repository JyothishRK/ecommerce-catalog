import classes from "./product-image.module.css";

function ProductImage(props) {
  const product = props.props.props.product;
  // console.log("", product);
  return (
    <div className={classes.imageContainer}>
      {/* <img src={product.image} alt={product.name} className={classes.productImage} /> */}
      <img
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt={product.name}
        height = {450}
        width = {600}
        className={classes.productImage}
      />
    </div>
  );
}

export default ProductImage;
