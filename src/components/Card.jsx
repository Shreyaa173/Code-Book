import React from 'react'

export default function Card({imgurl,coursename,authorname,lessons}) {
  return (
    <a href="#" className="course-box">
        <div className="course-image">
            <img src={imgurl} alt={coursename}/>
        </div>
        <div className="course-text">
            <p className="course-name">{coursename}</p>
            <p className="course-author"><i className="fa-solid fa-user-tie"></i>By {authorname}</p>
            <p className="lessons"><i className="fa-brands fa-leanpub"></i>{lessons} Lessons</p>
        </div>
    </a>
  )
}
