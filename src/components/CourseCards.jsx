import React from 'react';
import next from "../assets/nextjs.svg";
import react from "../assets/react.svg";
import php from "../assets/php.svg";
import swift from "../assets/swift.svg";
import go from "../assets/go.svg";
import Ruby from "../assets/ruby.svg";
import node from "../assets/node.svg";
import python from "../assets/python.svg";
import HTML from "../assets/HTML.svg";
import kotlin from "../assets/kotlin.svg";
import java from "../assets/java.svg";
import Chash from "../assets/chash.svg";
import CSS from "../assets/css.svg";
import CPP from "../assets/cpp.svg";
import JS from "../assets/JS.svg";
import c from "../assets/c.svg";
import Card from './Card';

function CourseCards() {
  return (
    <section
  style={{
    background: '#13072e',
  }}
  className="py-6"
>
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Our Courses</h2>
        <p className="text-center text-white mb-8 max-w-2xl mx-auto">Explore a variety of programming languages and frameworks. Each course is crafted to help you master essential skills in development.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </section>
  );
}

export default CourseCards;
