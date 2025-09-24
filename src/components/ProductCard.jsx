function ProductCard({ image_link, product_name, price, storage }) {
  return (
    <>
      <div className="p-3 border">
        <img
          className="h-[200px] w-[500px] object-contain rounded-md"
          src={image_link}
          alt=""
        />
        <h2 className="capitalize my-2 text-lg font-bold">{product_name}</h2>
        <div className="flex justify-between text-gray-500 font-mono font-medium">
          <p>{price}</p>
          <p>{storage}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
