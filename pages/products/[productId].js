import Link from "next/link";

function ProductDetailPage(props) {
  const product = props.product;
  if (!product) {
    return <div>Loading Data</div>;
  }

  return (
    <ul>
      <li id={product._id}>{product.name}</li>
    </ul>
  );
}

export default ProductDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;
  const response = await fetch(
    "https://ecommerce-catalog-i19b.onrender.com/products/" + productId
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
