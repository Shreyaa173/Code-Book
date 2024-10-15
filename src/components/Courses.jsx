 import React, { useState } from 'react';
import CourseCards from './CourseCards';

function Courses() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // List of courses to pass to CourseCards
  const courses = [
    { imgurl: java, coursename: "Java", authorname: "Kunal Kushwaha", lessons: 65, ytlink: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" },
    { imgurl: c, coursename: "C", authorname: "Sandeep Jain", lessons: 50, ytlink: "https://www.youtube.com/@sandeepjain" },
    { imgurl: CPP, coursename: "CPP", authorname: "Gaurav Sen", lessons: 45, ytlink: "https://www.youtube.com/@gkcs" },
    { imgurl: Chash, coursename: "C#", authorname: "Anuj Bhaiya", lessons: 40, ytlink: "https://www.youtube.com/@AnujBhaiya" },
    { imgurl: Ruby, coursename: "Ruby", authorname: "Bhavin Patel", lessons: 55, ytlink: "" },
    { imgurl: python, coursename: "Python", authorname: "Tanay Pratap", lessons: 70, ytlink: "https://www.youtube.com/@tanaypratap" },
    { imgurl: CSS, coursename: "CSS", authorname: "Prateek Narang", lessons: 60, ytlink: "https://www.youtube.com/@PrateekNarang27/playlists" },
    { imgurl: go, coursename: "Go", authorname: "Akash Thakur", lessons: 35, ytlink: "" },
    { imgurl: HTML, coursename: "HTML", authorname: "Vishal Kumar", lessons: 25, ytlink: "https://www.youtube.com/@tbhvishalkumar" },
    { imgurl: JS, coursename: "Javascript", authorname: "Nikhil Malankar", lessons: 55, ytlink: "https://www.youtube.com/@nikmlnkr" },
    { imgurl: kotlin, coursename: "Kotlin", authorname: "Sanket Singh", lessons: 42, ytlink: "https://www.youtube.com/@SanketSingh1" },
    { imgurl: node, coursename: "Node.js", authorname: "Hitesh Choudhary", lessons: 50, ytlink: "https://www.youtube.com/@HiteshCodeLab" },
    { imgurl: swift, coursename: "Swift", authorname: "Kunal Kushwaha", lessons: 65, ytlink: "https://www.youtube.com/@kunalkushwaha" },
    { imgurl: php, coursename: "PHP", authorname: "Anurag Tiwari", lessons: 65, ytlink: "https://www.youtube.com/@anuragtiwarime" },
    { imgurl: react, coursename: "React.js", authorname: "Amman Dhattarwal", lessons: 65, ytlink: "https://www.youtube.com/watch?v=gY5sGvq-8h8" },
    { imgurl: next, coursename: "Next.js", authorname: "College Wallah", lessons: 25, ytlink: "https://www.youtube.com/@CollegeWallahbyPW" },
  ];

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.coursename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="course-head" id="course-head">
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

      {/* Pass filtered courses to CourseCards */}
      <CourseCards courses={filteredCourses} />
    </div>
  );
}

export default Courses;
