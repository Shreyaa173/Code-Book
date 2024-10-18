import React from 'react'
import CourseCards from './CourseCards'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Courses() {
  return (
    <div>
      <div className="course-head" id="course-head">
        <div className="search-icon">
          <h2>Our Courses</h2>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Explore Courses... " 
              
              spellCheck="false" 
            /> 
            <i className="fas fa-search" style={{position:"relative"}}></i>
           
          </div>
        </div>
      </div>  
      <CourseCards />
    </div>
  )
}

export default Courses
