function CourseContentCard({
  course_image,
  course_tag,
  course_title,
  course_description,
  course_tag_bg_color,
}) {
  return (
    <div className="p-4 border-gray-50 rounded-2xl">
      <img
        className="w-[30rem] object-cover rounded-2xl"
        src={course_image}
        alt=""
      ></img>
      <p
        className={`${course_tag_bg_color} text-white text-sm w-fit p-1 px-3 my-4 rounded-2xl`}
      >
        {course_tag}
      </p>
      <h2 className="text-2xl font-bold mb-4">{course_title}</h2>
      <p className="text-gray-500 mb-4">{course_description}</p>
      <button className="bg-black py-2 px-10 text-white rounded-md cursor-pointer">
        Learn more
      </button>
    </div>
  );
}

export default CourseContentCard;
