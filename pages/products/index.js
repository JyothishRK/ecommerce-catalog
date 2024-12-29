import Link from "next/link";

import AllProductsPage from "../../components/products/all-products";

function ProductsPage(props) {


  return (
      <AllProductsPage products={props.products} />
  );
}

export default ProductsPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_GETALL_URL;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const recievedProducts = data.products;

  return {
    props: {
      products: recievedProducts,
    },
    revalidate: 10,
  };
}
