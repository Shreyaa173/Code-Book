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
        docsLink:
        "https://docs.oracle.com/en/java/",
        bookslink:
        "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#java"
       
      },
    {
      imgurl: c,
      coursename: "C",
      authorname: "Sandeep Jain",
      lessons: 50,
      ytlink: "https://www.youtube.com/@sandeepjain",
      docsLink:
      "https://www.geeksforgeeks.org/c-programming-language/?ref=ghm",
      bookslink:
      "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c"
    },
    {
      imgurl: CPP,
      coursename: "CPP",
      authorname: "Gaurav Sen",
      lessons: 45,
      ytlink: "https://www.youtube.com/@gkcs",
      docsLink:
      "https://www.geeksforgeeks.org/c-plus-plus/?ref=ghm",
      bookslink:
      "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c-2"
    },
    {
      imgurl: Chash,
      coursename: "C#",
      authorname: "Anuj Bhaiya",
      lessons: 40,
      ytlink: "https://www.youtube.com/@AnujBhaiya",
      docsLink:
      "https://learn.microsoft.com/en-us/dotnet/csharp/",
      bookslink:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#c-1"

    },
    {
      imgurl: Ruby,
      coursename: "Ruby",
      authorname: "Rajat Talesra",
      lessons: 1,
      ytlink: "https://www.youtube.com/watch?v=w9yNsTAp-Mg&ab_channel=RajatTalesra",
      docsLink:
      "https://www.tutorialspoint.com/ruby/index.htm",
      bookslink:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#ruby"
    },
    {
      imgurl: python,
      coursename: "Python",
      authorname: "Tanay Pratap",
      lessons: 70,
      ytlink: "https://www.youtube.com/@tanaypratap",
      docsLink:"https://docs.python.org/3/",
      bookslink:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#python"
    },
    {
      imgurl: CSS,
      coursename: "CSS",
      authorname: "Prateek Narang",
      lessons: 60,
      ytlink: "https://www.youtube.com/@PrateekNarang27/playlists",
      docsLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#html-and-css"
    },
    {
      imgurl: go,
      coursename: "Go",
      authorname: "freeCodeCamp",
      lessons: 1,
      ytlink: "https://www.youtube.com/watch?v=un6ZyFkqFKo&ab_channel=freeCodeCamp.org",
      docsLink: "https://golang.org/doc/",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#go"
    },
    {
      imgurl: HTML,
      coursename: "HTML",
      authorname: "Vishal Kumar",
      lessons: 25,
      ytlink: "https://www.youtube.com/@tbhvishalkumar",
      docsLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#html-and-css"
    },
    {
      imgurl: JS,
      coursename: "Javascript",
      authorname: "Nikhil Malankar",
      lessons: 55,
      ytlink: "https://www.youtube.com/@nikmlnkr",
      docsLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#javascript"
    },
    {
      imgurl: kotlin,
      coursename: "Kotlin",
      authorname: "Sanket Singh",
      lessons: 42,
      ytlink: "https://www.youtube.com/@SanketSingh1",
      docsLink: "https://kotlinlang.org/docs/home.html",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#kotlin"

    },
    {
      imgurl: node,
      coursename: "Node.js",
      authorname: "Hitesh Choudhary",
      lessons: 50,
      ytlink: "https://www.youtube.com/@HiteshCodeLab",
      docsLink: "https://nodejs.org/en/docs/",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#nodejs"
    },
    {
      imgurl: swift,
      coursename: "Swift",
      authorname: "Kunal Kushwaha",
      lessons: 65,
      ytlink: "https://www.youtube.com/@kunalkushwaha",
      docsLink: "https://swift.org/documentation/",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#swift"
    },
    {
      imgurl: php,
      coursename: "PHP",
      authorname: "Anurag Tiwari",
      lessons: 65,
      ytlink: "https://www.youtube.com/@anuragtiwarime",
      docsLink: "https://www.php.net/docs.php",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#php"
    },
    {
      imgurl: react,
      coursename: "React.js",
      authorname: "Amman Dhattarwal",
      lessons: 65,
      ytlink: "https://www.youtube.com/watch?v=gY5sGvq-8h8",
      docsLink: "https://reactjs.org/docs/getting-started.html",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#react"
    },
    {
      imgurl: next,
      coursename: "Next.js",
      authorname: "College Wallah",
      lessons: 25,
      ytlink: "https://www.youtube.com/@CollegeWallahbyPW",
      docsLink: "https://nextjs.org/docs",
      bookslink: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#nextjs"
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
              docsLink={course.docsLink}
              bookslink={course.bookslink}
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
    </div>
  );
}

export default CourseCards;
