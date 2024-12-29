import classes from './all-products.module.css';
import ProductsGrid from './products-grid';

function AllProductsPage(props){

    return (
        <section className={classes.products}>
            <h1>Available Products</h1>
            <ProductsGrid  products={props.products}/>
        </section>
    )
}

export default AllProductsPage;