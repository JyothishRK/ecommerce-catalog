import Link from "next/link";

function AllProductsPage(props) {
  const products = props.products;
  if (!products) {
    return <div>Loading Data</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <Link href={"/products/" + product._id}>
            <li id={product._id}>{product.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default AllProductsPage;

export async function getStaticProps() {
    const response = await fetch(
      'https://ecommerce-catalog-i19b.onrender.com/products'
    );
    const data = await response.json();
    const recievedProducts = data.products
  
    return {
      props: {
        products: recievedProducts,
      },
      revalidate: 10,
    };
  }
