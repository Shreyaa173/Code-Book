import React from 'react';
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
import Card from './Card';

function CourseCards() {
  return (
    <>
      <div className="course-page" id="course-page">
        <div className="courses">
          <Card imgurl={java} coursename={"Java"} authorname={"Kunal Kushwaha"} lessons={65} ytlink={"https://www.youtube.com/@kunalkushwaha"} />
          <Card imgurl={c} coursename={"C"} authorname={"Sandeep Jain"} lessons={50} ytlink={"https://www.youtube.com/@sandeepjain"} />
          <Card imgurl={CPP} coursename={"CPP"} authorname={"Gaurav Sen"} lessons={45} ytlink={"https://www.youtube.com/@gkcs"} />
          <Card imgurl={Chash} coursename={"C#"} authorname={"Anuj Bhaiya"} lessons={40} ytlink={"https://www.youtube.com/@AnujBhaiya"} />
          <Card imgurl={Ruby} coursename={"Ruby"} authorname={"Bhavin Patel"} lessons={55} ytlink={""} />
          <Card imgurl={python} coursename={"Python"} authorname={"Tanay Pratap"} lessons={70} ytlink={"https://www.youtube.com/@tanaypratap"} />
          <Card imgurl={CSS} coursename={"CSS"} authorname={"Prateek Narang"} lessons={60} ytlink={""} />
          <Card imgurl={go} coursename={"Go"} authorname={"Akash Thakur"} lessons={35} ytlink={""} />
          <Card imgurl={HTML} coursename={"HTML"} authorname={"Vishal Kumar"} lessons={25} ytlink={"https://www.youtube.com/@tbhvishalkumar"} />
          <Card imgurl={JS} coursename={"Javascript"} authorname={"Nikhil Malankar"} lessons={55} ytlink={"https://www.youtube.com/@nikmlnkr"} />
          <Card imgurl={kotlin} coursename={"Kotlin"} authorname={"Sanket Singh"} lessons={42} ytlink={"https://www.youtube.com/@SanketSingh1"} />
          <Card imgurl={node} coursename={"Node.js"} authorname={"Hitesh Choudhary"} lessons={50} ytlink={"https://www.youtube.com/@HiteshCodeLab"} />
          <Card imgurl={swift} coursename={"Swift"} authorname={"Kunal Kushwaha"} lessons={65} ytlink={"https://www.youtube.com/@kunalkushwaha"} />
          <Card imgurl={php} coursename={"PHP"} authorname={"Anurag Tiwari"} lessons={65} ytlink={""} />
          <Card imgurl={react} coursename={"React"} authorname={"Amman Dhattarwal"} lessons={65} ytlink={"https://www.youtube.com/@AmanDhattarwal"} />
          <Card imgurl={next} coursename={"Next.js"} authorname={"College Wallah"} lessons={25} ytlink={"https://www.youtube.com/@CollegeWallahbyPW"} />
        </div>
      </div>
    </>
  );
}

export default CourseCards;
