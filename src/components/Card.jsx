import React from "react";

export default function Card({ imgurl, coursename, authorname, lessons }) {
  return (
    <div className="e-card playing">
      
      <img className="dp" src={imgurl}/>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="infotop">
        <br />
        <div className="course-author">{coursename}</div>
        <p className="name">
          <i className="fa-solid fa-user-tie"></i> {authorname}
        </p>
        <p className="lesson">
          <i className="fa-brands fa-leanpub"></i> {lessons} lessons
        </p>
      </div>
    </div>
  );
}
