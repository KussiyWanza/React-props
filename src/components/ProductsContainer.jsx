import { products } from "../data";
import ProductCard from "./ProductCard";

function ProductsContainer() {
  return (
    <>
      <div>
        {products.map((item) => {
          return (
            <ProductCard
              image_link={item.image_link}
              product_name={item.product_name}
              price={item.price}
              storage={item.storage}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsContainer;
