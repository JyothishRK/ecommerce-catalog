import { useState } from "react";
import SearchBar from "../../components/search/search-bar";
import AllProductsPage from "../../components/products/all-products";

function ProductsPage(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    console.log("Search term:", newValue); // Log the search term
  };

  // Filter products based on the search term
  const filteredProducts = props.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {/* Products List (filtered) */}
      <AllProductsPage products={filteredProducts} />
    </div>
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
