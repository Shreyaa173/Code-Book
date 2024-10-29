// import next from "../assets/next.png";
import Card from "./Card";
import arrow from "../assets/arrow.png";
import getCourses from "../data/courseData";

function CourseCards({ searchTerm }) {
  const courses = getCourses();

  // Filter courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.coursename.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="course-page" id="course-page">
      <div className="courses">
        {filteredCourses.length > 0 ? (
          <>
            {filteredCourses.map((course, index) => (
              <Card
                key={index}
                imgurl={course.imgurl}
                coursename={course.coursename}
                authorname={course.authorname}
                Notes={course.Notes}
                ytlink={course.ytlink}
                gfgLink={course.gfgLink}
              />
            ))}
            <div className="arrow-container">
              <a href="/courses">
                <img src={arrow} alt="Arrow" className="arrow-image" />
              </a>
            </div>
          </>
        ) : (
          <a
            href="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=1060&t=st=1729348558~exp=1729349158~hmac=e9edf6c5c2ad2259ebe6a41759c11690e61df13c3a0831cc00367ececf6b89a5"
            className="course-box"
          >
            <div className="course-image">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=1060&t=st=1729348558~exp=1729349158~hmac=e9edf6c5c2ad2259ebe6a41759c11690e61df13c3a0831cc00367ececf6b89a5"
                alt="No course found"
              />
            </div>
            <div className="course-text">
              <h3 className="course-name">No Courses Found</h3>
              <p>Try searching for something else!</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default CourseCards;
