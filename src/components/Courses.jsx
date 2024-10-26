import { useState } from "react";
import CourseCards from "./CourseCards";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div id="courses">
      <div className="course-head">
        <div className="search-icon">
          <h2>Our Courses</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Explore Courses..."
              spellCheck="false"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="mag">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <CourseCards searchTerm={searchTerm} />
    </div>
  );
}

export default Courses;
