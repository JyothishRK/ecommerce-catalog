import Link from "next/link";

import ProductPage from "../../components/products/product-page/product-page";

function ProductDetailPage(props) {
  const product = props.product;

  if (!product) {
    return <div>Loading Data...</div>;
  }
  // console.log(props)
  return (
    <ProductPage props = {props} />
  );
}

export default ProductDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const response = await fetch(
    process.env.API_GETBYID_URL + productId
  );
  const data = await response.json();
  const product = data.product;

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://ecommerce-catalog-i19b.onrender.com/products"
  );
  const data = await response.json();
  const products = data.products;

  const pathsWithParams = products.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
