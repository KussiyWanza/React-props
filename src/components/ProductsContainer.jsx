import { products } from "../data";

function ProductsContainer() {
  const hobbies = ["Singling", "Praying", "Sleeping"];
  return (
    <>
      <div>
        {hobbies.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        {products.map((item) => {
          return (
            <div>
              <img src={item.image_link} alt="" />
              <h2>{item.product_name}</h2>
              <div>
                <p>{item.price}</p>
                <p>{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsContainer;
