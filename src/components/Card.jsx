import React from 'react';

export default function Card({ imgurl, coursename, authorname, lessons, ytlink, docsLink, bookslink }) {
  return (
    <div className="course-box">
      <a href={ytlink} target="_blank" rel="noopener noreferrer">
        <div className="course-image">
          <img src={imgurl} alt={coursename} />
        </div>
      </a>
      
      <div className="course-text">
        <p className="course-name">{coursename}</p>
        <p className="course-author"><i className="fa-solid fa-user-tie"></i>By {authorname}</p>
        <p className="lessons"><i className="fa-brands fa-leanpub"></i>{lessons} Lessons</p>
        <p className="link-style"><i className="fas fa-link"></i><a href={docsLink} target='_blank' className="link-style"> Docs</a></p>
        <p className="link-style"><i className="fa-solid fa-book"></i><a href={bookslink} target='_blank' className="link-style">   Books</a></p>
      </div>
    </div>
  );
}
