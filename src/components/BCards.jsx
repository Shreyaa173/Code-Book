import React from 'react';

export default function BCards({ imgurl, coursename, ytlink }) {
  return (
    //ytlink prop into the Card component 
    //target="_blank" attribute in the anchor tag to open the course link in a new tab
    <a href={ytlink} target="_blank" rel="noopener noreferrer" className="course-box">
      <div className="course-image">
        <img src={imgurl} alt={coursename} />
      </div>
      <div className="course-text">
        <p className="course-name">{coursename}</p>
      </div>
    </a>
  );
}
