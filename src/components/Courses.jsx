import React from 'react';
import CourseCards from './CourseCards';

function Courses() {
  return (
    <div
      className="py-12"
      style={{
        background: '#13072e',
      }}
    >
      <div className="course-head w-full container mx-auto px-4 text-center" id="course-head">
        <div className="search-icon mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Our Courses</h2>
          <div className="search-bar flex justify-center items-center space-x-2">
            <input
              type="text"
              placeholder="Explore Courses..."
              spellCheck="false"
              className="px-4 py-2 w-full max-w-md rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition duration-200">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <CourseCards />
    </div>
  );
}

export default Courses;
