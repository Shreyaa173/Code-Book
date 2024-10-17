import React from 'react'
import BookCards from './BookCards'
function Books() {
  return (
    <div>
        <div className="course-head" id="course-head">
            <div className="search-icon">
                <h2>Books</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Explore Courses..." spellcheck="false"/>
                    <button className='mag'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>  
        <BookCards></BookCards>
    </div>
  )
}

export default Books