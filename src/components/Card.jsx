import React from 'react';

export default function Card({ imgurl, coursename, authorname, lessons, ytlink, docsLink, bookslink }) {
  return (
    <div className="course-box">
      <div className="course-image">
        <img src={imgurl} alt={coursename} />
      </div>
      <div className="course-text">
        <p className="course-name">{coursename}</p>
        <p className="course-author"><i className="fa-solid fa-user-tie"></i>By {authorname}</p>
        <p className="lessons"><i className="fa-brands fa-leanpub"></i>{lessons} Lessons</p>
        <div className="course-links">
          <a className='youtube-link' href={ytlink} target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i>  youtube</a> <br/>
          <a href={docsLink} target="_blank" rel="noreferrer" ><i class="fa-solid fa-book">  </i>   docs</a> <br/>
          <a href={bookslink} target="_blank" rel="noreferrer"><i class="fa-solid fa-book">  </i>   Books</a>



        </div>
      </div>
    </div>
  );
}
