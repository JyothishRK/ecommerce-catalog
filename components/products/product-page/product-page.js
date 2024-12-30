import ProductImage from "./product-image";
import ProductDetails from "./product-details";

import classes from "./product-page.module.css";

function ProductPage(props) {
  return (
    <div className={classes.productPage}>
      <ProductImage props = {props} />
      <ProductDetails product={props} />
    </div>
  );
}

export default ProductPage;