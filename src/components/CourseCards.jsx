import React from "react";
import next from "../assets/next.png";
import react from "../assets/react.png";
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
import arrow from "../assets/arrow.png"

function CourseCards({ searchTerm }) {
  const courses = [
    {
      imgurl: java,
      coursename: "Java",
      authorname: "Kunal Kushwaha",
      ytlink: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ", // Introduction to Java
      gfgLink: "https://www.geeksforgeeks.org/java/",
    },
    {
      imgurl: c,
      coursename: "C",
      authorname: "College Wallah",
      ytlink: "https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt", // C Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/c-programming-language/",
    },
    {
      imgurl: CPP,
      coursename: "C++",
      authorname: "Codehelp",
      ytlink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA", // C++ Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/c-plus-plus/",
    },
    {
      imgurl: Chash,
      coursename: "C#",
      authorname: "Code with Harry",
      ytlink: "https://www.youtube.com/watch?v=SuLiu5AK9Ps", // C# Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/csharp-programming-language/",
    },
    {
      imgurl: Ruby,
      coursename: "Ruby",
      authorname: "Free Code Camp",
      ytlink: "https://youtu.be/t_ispmWmdjY?si=cGPcXmH321aiCWEx", // Ruby Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/ruby/",
    },
    {
      imgurl: python,
      coursename: "Python",
      authorname: "Code with Harry",
      ytlink: "https://youtu.be/UrsmFxEIp5k?si=MkQ8K4HxBO19sU23", // Python Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/python-programming-language/",
    },
    {
      imgurl: CSS,
      coursename: "CSS",
      authorname: "Free Code Camp",
      ytlink: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", // CSS Crash Course
      gfgLink: "https://www.geeksforgeeks.org/css/",
    },
    {
      imgurl: go,
      coursename: "Go",
      authorname: "Alex Mux",
      ytlink: "https://youtu.be/8uiZC0l4Ajw?si=QXJnV58ksxBxVRLP", // Go Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/go-programming-language/",
    },
    {
      imgurl: HTML,
      coursename: "HTML",
      authorname: "Apna College",
      ytlink: "https://youtu.be/HcOc7P5BMi4?si=zw6ntozRp5KCo1M3", // HTML Crash Course
      gfgLink: "https://www.geeksforgeeks.org/html/",
    },
    {
      imgurl: JS,
      coursename: "JavaScript",
      authorname: "KGCoding",
      ytlink: "https://youtu.be/cpoXLj24BDY?si=09lg2YIRb7_bmQn1", // JavaScript Crash Course
      gfgLink: "https://www.geeksforgeeks.org/javascript/",
    },
    {
      imgurl: kotlin,
      coursename: "Kotlin",
      authorname: "Free Code Camp",
      ytlink: "https://youtu.be/F9UC9DY-vIU?si=CmdTnIKtAZlE-QrW", // Kotlin Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/kotlin/",
    },
    {
      imgurl: node,
      coursename: "Node.js",
      authorname: "Programming with Mosh",
      ytlink: "https://www.youtube.com/watch?v=TlB_eWDSMt4", // Node.js Crash Course
      gfgLink: "https://www.geeksforgeeks.org/node-js/",
    },
    {
      imgurl: swift,
      coursename: "Swift",
      authorname: "Free Code Camp",
      ytlink: "https://youtu.be/comQ1-x2a1Q?si=PO3ITz3xy9Q2DjDf", // Swift Programming Tutorial
      gfgLink: "https://www.geeksforgeeks.org/swift-programming-language/",
    },
    {
      imgurl: php,
      coursename: "PHP",
      authorname: "Free Code Camp",
      ytlink: "https://www.youtube.com/watch?v=OK_JCtrrv-c", // PHP for Beginners
      gfgLink: "https://www.geeksforgeeks.org/php/",
    },
    {
      imgurl: react,
      coursename: "React.js",
      authorname: "Aman Dhattarwal",
      ytlink: "https://youtu.be/gY5sGvq-8h8?si=8XOL3vp2xWAmoXdr", // React Crash Course
      gfgLink: "https://www.geeksforgeeks.org/reactjs/",
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
            <>
              {filteredCourses.map((course, index) => (
                <Card
                  key={index}
                  imgurl={course.imgurl}
                  coursename={course.coursename}
                  authorname={course.authorname}
                  Notes={course.Notes}
                  ytlink={course.ytlink}
                />
              ))}
              <div className="arrow-container">
                <a href="/courses"><img src={arrow} alt="Arrow" className="arrow-image" /></a>
              </div>
            </>
          ) : (
            <a href="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=1060&t=st=1729348558~exp=1729349158~hmac=e9edf6c5c2ad2259ebe6a41759c11690e61df13c3a0831cc00367ececf6b89a5" className="course-box">
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
