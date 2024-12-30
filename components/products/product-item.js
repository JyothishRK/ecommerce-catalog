import Image from "next/image";
import Link from "next/link";

import classes from "./product-item.module.css";

function ProductItem(props) {
  const { _id, name, description, price, category, image } = props.product;

  const linkPath = "/products/" + _id;

  // console.log(props);

  return (
    <li className={classes.product}>
      <Link href={linkPath}>
        <div className={classes.image}>
          {/* <Image
        src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt="Nature"
        width={200}
        height={150}
        layout="responsive"
      /> */}
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            height={200}
            width={250}
          />
        </div>
        <div className={classes.content}>
          <h3>{name}</h3>
          <h5>{"Category: " + category}</h5>
          <p>{"Price: $" + price}</p>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
