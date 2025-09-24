const SoftwareDevelopmentCard = () => {
  return (
    <div className="p-4 border rounded-2xl">
      <img
        className="w-[30rem] object-cover rounded-2xl"
        src="/public/sd.jpg"
        alt=""
      ></img>
      <p className="bg-green-900 text-white text-sm w-fit p-1 px-3 my-4 rounded-2xl">
        Career change
      </p>
      <h2 className="text-2xl font-bold mb-4">Software Development</h2>
      <p className="text-gray-500 mb-4">
        A tailored 20-week bootcamp, perfect for tech newcomers or those with
        minimal programming experience who want to transform their career.
      </p>
      <button className="bg-black py-2 px-10 text-white rounded-md cursor-pointer">
        Learn more
      </button>
    </div>
  );
};

export default SoftwareDevelopmentCard;
