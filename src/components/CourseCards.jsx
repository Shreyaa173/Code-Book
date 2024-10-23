import React from "react";
import next from "../assets/next.png";
import react from "../assets/react.svg";
import php from "../assets/php.png";
import swift from "../assets/swift.png";
import go from "../assets/go.png";
import Ruby from "../assets/ruby.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import HTML from "../assets/HTML.png";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";
import Chash from "../assets/Chash.png";
import CSS from "../assets/CSS.png";
import CPP from "../assets/CPP.png";
import JS from "../assets/JS.png";
import c from "../assets/C.png";
import Card from "./Card";

function CourseCards({ searchTerm }) {
  const courses = [
    {
      imgurl: java,
      coursename: "Java",
      authorname: "Kunal Kushwaha",
      lessons: 65,
      ytlink:
        "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
    },
    {
      imgurl: c,
      coursename: "C",
      authorname: "Sandeep Jain",
      lessons: 50,
      ytlink: "https://www.youtube.com/@sandeepjain",
    },
    {
      imgurl: CPP,
      coursename: "CPP",
      authorname: "Gaurav Sen",
      lessons: 45,
      ytlink: "https://www.youtube.com/@gkcs",
    },
    {
      imgurl: Chash,
      coursename: "C#",
      authorname: "Anuj Bhaiya",
      lessons: 40,
      ytlink: "https://www.youtube.com/@AnujBhaiya",
    },
    {
      imgurl: Ruby,
      coursename: "Ruby",
      authorname: "Bhavin Patel",
      lessons: 55,
      ytlink: "",
    },
    {
      imgurl: python,
      coursename: "Python",
      authorname: "Tanay Pratap",
      lessons: 70,
      ytlink: "https://www.youtube.com/@tanaypratap",
    },
    {
      imgurl: CSS,
      coursename: "CSS",
      authorname: "Prateek Narang",
      lessons: 60,
      ytlink: "https://www.youtube.com/@PrateekNarang27/playlists",
    },
    {
      imgurl: go,
      coursename: "Go",
      authorname: "Akash Thakur",
      lessons: 35,
      ytlink: "",
    },
    {
      imgurl: HTML,
      coursename: "HTML",
      authorname: "Vishal Kumar",
      lessons: 25,
      ytlink: "https://www.youtube.com/@tbhvishalkumar",
    },
    {
      imgurl: JS,
      coursename: "Javascript",
      authorname: "Nikhil Malankar",
      lessons: 55,
      ytlink: "https://www.youtube.com/@nikmlnkr",
    },
    {
      imgurl: kotlin,
      coursename: "Kotlin",
      authorname: "Sanket Singh",
      lessons: 42,
      ytlink: "https://www.youtube.com/@SanketSingh1",
    },
    {
      imgurl: node,
      coursename: "Node.js",
      authorname: "Hitesh Choudhary",
      lessons: 50,
      ytlink: "https://www.youtube.com/@HiteshCodeLab",
    },
    {
      imgurl: swift,
      coursename: "Swift",
      authorname: "Kunal Kushwaha",
      lessons: 65,
      ytlink: "https://www.youtube.com/@kunalkushwaha",
    },
    {
      imgurl: php,
      coursename: "PHP",
      authorname: "Anurag Tiwari",
      lessons: 65,
      ytlink: "https://www.youtube.com/@anuragtiwarime",
    },
    {
      imgurl: react,
      coursename: "React.js",
      authorname: "Amman Dhattarwal",
      lessons: 65,
      ytlink: "https://www.youtube.com/watch?v=gY5sGvq-8h8",
    },
    {
      imgurl: next,
      coursename: "Next.js",
      authorname: "College Wallah",
      lessons: 25,
      ytlink: "https://www.youtube.com/@CollegeWallahbyPW",
    },
  ];

  // Filter courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.coursename.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="course-page" id="course-page">
      <div className="courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Card
              key={index}
              imgurl={course.imgurl}
              coursename={course.coursename}
              authorname={course.authorname}
              lessons={course.lessons}
              ytlink={course.ytlink}
            />
          ))
        ) : (
          <a href="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=1060&t=st=1729348558~exp=1729349158~hmac=e9edf6c5c2ad2259ebe6a41759c11690e61df13c3a0831cc00367ececf6b89a5" className="course-box" >
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
      <div id="testimonials"></div>
    </div>
  );
}

export default CourseCards;
