import Link from "next/link";
import ProductPage from "../../components/products/product-page/product-page";

function ProductDetailPage(props) {
  const product = props.product;

  // Fallback handling for dynamic paths
  if (!product) {
    return <div>Loading Data...</div>;
  }

  return <ProductPage props={props} />;
}

export default ProductDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  try {
    // Fetch product data by ID
    const response = await fetch(`${process.env.API_GETBYID_URL}${productId}`);
    if (!response.ok) {
      // Handle invalid product ID or API failure
      return { notFound: true };
    }

    const data = await response.json();
    const product = data.product;

    return {
      props: {
        product,
      },
      revalidate: 10, // Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true }; // Return 404 if fetch fails
  }
}

export async function getStaticPaths() {
  try {
    // Fetch all products to pre-render their paths
    const response = await fetch("https://ecommerce-catalog-i19b.onrender.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    const products = data.products;

    // Generate paths with product IDs
    const pathsWithParams = products.map((product) => ({
      params: { productId: product._id },
    }));

    return {
      paths: pathsWithParams,
      fallback: true, // Dynamically generate pages not pre-rendered
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      paths: [], // No pre-rendered paths in case of error
      fallback: true, // Allow dynamic generation
    };
  }
}
