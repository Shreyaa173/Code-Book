import React from 'react'
import CourseCards from './CourseCards'
function Courses() {
  return (
    <div>
        <div className="course-head" id="course-head">
            <div className="search-icon">
                <h2>Our Courses</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Explore Courses..." spellcheck="false"/>
                    <button className='mag'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>  
        <CourseCards></CourseCards>
    </div>
  )
}

export default Courses