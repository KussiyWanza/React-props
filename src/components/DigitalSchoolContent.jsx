function DigitalSchoolContent({
  school_stats,
  school_title,
  school_description,
}) {
  return (
    <div className="bg-white w-[25%] h-[20rem] flex flex-col rounded-2xl p-5 justify-around border-1 my-6">
      <h2 className="text-3xl font-bold">{school_stats}</h2>
      <h3 className="text-[1.2rem] font-bold my-6">{school_title}</h3>
      <p>{school_description}</p>
    </div>
  );
}

export default DigitalSchoolContent;
