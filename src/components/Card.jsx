import React from 'react';

export default function Card({ imgurl, coursename, authorname, lessons, ytlink }) {
  return (
    //ytlink prop into the Card component 
    //target="_blank" attribute in the anchor tag to open the course link in a new tab
    <a href={ytlink} target="_blank" rel="noopener noreferrer" className="course-box">
      <div className="course-image">
        <img src={imgurl} alt={coursename} />
      </div>
      <div className="course-text">
        <p className="course-name">{coursename}</p>
        <p className="course-author"><i className="fa-solid fa-user-tie"></i>By {authorname}</p>
        <p className="lessons"><i className="fa-brands fa-leanpub"></i>{lessons} Lessons</p>
      </div>
    </a>
  );
}
