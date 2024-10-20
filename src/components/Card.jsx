import React from 'react';

export default function Card({ imgurl, coursename, authorname, lessons, ytlink, docsLink, bookslink }) {
  return (
    //ytlink prop into the Card component 
    //target="_blank" attribute in the anchor tag to open the course link in a new tab
    <div  className="course-box">
    <a href={ytlink} target="_blank" rel="noopener noreferrer">
      <div className="course-image">
        <img src={imgurl} alt={coursename} />
      </div>
      </a>
      
      <div className="course-text">
      <h4>{coursename}</h4>
        <p className="course-name">{coursename}</p>
        <p className="course-author"><i className="fa-solid fa-user-tie"></i>By {authorname}</p>
        <p className="lessons"><i className="fa-brands fa-leanpub"></i>{lessons} Lessons</p>
        <a href={docsLink} target="_blank" rel="noopener noreferrer" className="docs"> <i className="fa-solid fa-file-alt"></i> Docs</a>
         <a href={bookslink} target="_blank" rel="noopener noreferrer" className="books"> <i className="fa-solid fa-book"></i> Books</a>
      </div>
      </div>
  );
}