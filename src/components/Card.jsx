import React from 'react';

export default function Card({ imgurl, coursename, authorname, lessons }) {
  return (
    <a href="#" className="block max-w-xs mx-auto p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <div className="course-image">
        <img className="w-full h-40 object-contain rounded-t-lg" src={imgurl} alt={coursename} />
      </div>
      <div className="course-text p-4 text-center">
        <p className="course-name text-lg font-semibold text-gray-800">{coursename}</p>
        <p className="course-author text-sm text-gray-500 mt-2"><i className="fa-solid fa-user-tie mr-1"></i>By {authorname}</p>
        <p className="lessons text-sm text-gray-500 mt-1"><i className="fa-brands fa-leanpub mr-1"></i>{lessons} Lessons</p>
      </div>
    </a>
  );
}
