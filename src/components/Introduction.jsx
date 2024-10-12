import React from 'react';
import home from "../assets/home.png";

function Introduction() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 mx-auto bg-gradient-to-r from-[#13072e] to-[#3f2182] rounded-3xl mt-24 p-8">
        <div className="left-text lg:w-1/2">
          <div className="top-text mb-6">
            <button className="bg-[#b3aaff] text-black rounded-full px-6 py-2 font-medium">
              Code Your Way to Success
            </button>
          </div>
          <div className="mid-text mb-6">
            <p className="text-lg leading-8 text-white">
              Welcome to Code Book, your ultimate coding destination. Whether you're a coding novice or a seasoned developer, we've got you covered. Master in-demand languages like Python, JavaScript, and Java while building real-world projects. Join our vibrant community of learners to collaborate and grow together. Start your coding journey today and unlock endless possibilities.
            </p>
          </div>
          <div className="explore">
            <button className="bg-yellow-400 text-black rounded-full px-6 py-2 transition-shadow hover:shadow-lg">
              <a href="#explore" className="flex items-center">
                Get Started (It's free)
                <i className="fa-solid fa-laptop-file ml-2"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="right-image lg:w-1/2 flex justify-center">
          <img src={home} alt="Home" className="w-[500px] mt-5 mb-5" />
        </div>
      </div>
      <div className="explore" id="explore"></div>
    </>
  );
}

export default Introduction;
