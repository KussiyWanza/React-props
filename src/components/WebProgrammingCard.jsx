function WebProgrammingCard() {
  return (
    <div className="p-4 border rounded-2xl">
      <img
        className="w-[30rem] h-[20rem] object-cover rounded-2xl"
        src="/public/wp.jpg"
        alt=""
      ></img>
      <p className="bg-purple-500 text-white text-sm w-fit p-1 px-3 my-4 rounded-2xl">
        Introduction
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Introduction to web programming
      </h2>
      <p className="text-gray-500 mb-4">
        A beginner-friendly training, tailored to help you build your first
        website with hands-on learning and expert guidance.
      </p>
      <button className="bg-black py-2 px-10 text-white rounded-md cursor-pointer">
        Learn more
      </button>
    </div>
  );
}

export default WebProgrammingCard;
