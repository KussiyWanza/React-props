import { products } from "../data";

function ProductsContainer() {
  const name = "John";
  const age = 45;
  const foods = ["rice", "beans", "eba", "noodles"];
  return foods(
    <div>
      {name} <p>{age}</p>
      {foods.map((item) => (
        <p className="bg-red-500 text-white mt-5">{item}</p>
      ))}
    </div>
  );
}

export default ProductsContainer;
