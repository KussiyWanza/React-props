import CourseContentCard from "./components/CourseContentCard";
import SoftwareDevelopmentCard from "./components/SoftwareDevelopmentCard";
import WebProgrammingCard from "./components/WebProgrammingCard";
import DigitalSchool from "./components/DigitalSchool";
import DigitalSchoolContent from "./components/DigitalSchoolContent";
import MarketingStatsContainer from "./components/MarketingStatsContainer";

function App() {
  return (
    <section>
      <div className="flex justify-center items-center gap-5 py-20 max-w-[80rem] mx-auto">
        <CourseContentCard
          course_title={"Software Developer Bootcamp"}
          course_tag={"Career change"}
          course_description={
            "A tailored 20-week bootcamp, perfect for tech newcomers or those with minimal programming experience who want to transform their career."
          }
          course_image={"/public/sd.jpg"}
          course_tag_bg_color={"bg-green-900"}
        />
        <CourseContentCard
          course_title={"Frontend developer - React JS"}
          course_tag={"Advanced"}
          course_image={"/public/sdr.jpg"}
          course_description={
            "Dive into React JS mastery in our advanced course for developers with basic front-end skills."
          }
          course_tag_bg_color={"bg-blue-500"}
        />
        <CourseContentCard
          course_title={"Cybersecurity - CompTIA security + Certified"}
          course_tag={"Advanced"}
          course_image={"/public/cs.jpg"}
          course_description={
            "Enroll in our cybersecurity training to gain in-depth knowledge and prepare for the CompTIA Security+ certification."
          }
          course_tag_bg_color={"bg-blue-500"}
        />
        <CourseContentCard
          course_title={"Software Testing - ISTQB Certified"}
          course_tag={"Advanced"}
          course_image={"/public/st.jpg"}
          course_description={
            "Get ISTQB-certified with our hands-on Software Testing training. Achieve formal recognition and comprehensive expertise."
          }
          course_tag_bg_color={"bg-blue-500"}
        />
      </div>
      <div className="bg-purple-500 flex justify-center items-center flex-col p-6">
        <DigitalSchool />
        <div className="flex flex-row justify-around gap-5">
          <DigitalSchoolContent
            school_stats={"#1"}
            school_title={"Digital School in Africa"}
            school_description={
              "Éducateur digital de la Tech en Afrique et au Moyen Orient."
            }
          />
          <DigitalSchoolContent
            school_stats={"70%"}
            school_title={"Employment rate"}
            school_description={
              "At the end of our career-changing courses, our graduates are helped by our Career team to find their dream job."
            }
          />
          <DigitalSchoolContent
            school_stats={"40 000"}
            school_title={"Graduates in African countries"}
            school_description={
              "GOMYCODE is a global community of digital professionals who have changed their careers with us."
            }
          />
          <DigitalSchoolContent
            school_stats={"1,500"}
            school_title={"Highly qualified instructors"}
            school_description={
              "We select the best profiles in each field to teach the most relevant skills with a student-centric approach."
            }
          />
        </div>
      </div>

      {/*New content*/}
      <MarketingStatsContainer />
    </section>
  );
}

export default App;
