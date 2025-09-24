function ProductCard() {
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
            <div className="p-3 border">
              <img
                className="h-[200px] w-[500px] object-contain rounded-md"
                src={item.image_link}
                alt=""
              />
              <h2 className="capitalize my-2 text-lg font-bold">
                {item.product_name}
              </h2>
              <div className="flex justify-between text-gray-500 font-mono font-medium">
                <p>{price}</p>
                <p>{storage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
