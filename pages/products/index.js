import { useState, useEffect } from "react";
import SearchBar from "../../components/search/search-bar";
import AllProductsPage from "../../components/products/all-products";

function ProductsPage(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(props.products);

  useEffect(() => {
    const searchProducts = async () => {
      if (searchTerm.trim()) {
        try {
          const searchUrl = `${process.env.API_SEARCH_URL}/search?query=${searchTerm}`;
          const response = await fetch(searchUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Add any other required headers
            },
            mode: 'cors' // Explicitly set CORS mode
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setFilteredProducts(data.products || []);
        } catch (error) {
          console.error("Search failed:", error);
          setFilteredProducts(props.products); // Fallback to all products
        }
      } else {
        setFilteredProducts(props.products);
      }
    };

    const timeoutId = setTimeout(searchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, props.products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <AllProductsPage products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;

export async function getStaticProps() {
  try {
    const apiUrl = process.env.API_GETALL_URL;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("Failed to fetch products:", response.status);
      return {
        props: {
          products: [],
        },
        revalidate: 10,
      };
    }

    const data = await response.json();
    const receivedProducts = data.products || [];

    return {
      props: {
        products: receivedProducts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
      revalidate: 10,
    };
  }
}
