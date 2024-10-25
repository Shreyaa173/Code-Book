import React from 'react'
import home from "../assets/home.png"
function Introduction() {
return (
    <>  <div className='home'>
        <div className="home-text" id="introduction">
                    <div className="left-text">
                        <div className="top-text">
                            <button className="top-button">Code Your Way to Success</button>
                        </div>
                        <div className="mid-text">
                            <p>Welcome to Code Book, your ultimate coding destination. Whether you're a coding novice or a seasoned developer, we've got you covered. Master in-demand languages like Python, JavaScript, and Java while building real-world projects. Join our vibrant community of learners to collaborate and grow together. Start your coding journey today and unlock endless possibilities.</p>
                        </div>
                        <div className="explore">
                            <button className="explore-btn"><a href= "/signup">Get Started (It's free)<i className="fa-solid fa-laptop-file"></i></a></button>
                        </div>
                    </div>    
                    <div className="right-image">
                        <img src={home} alt="" className="home-image"/>
                    </div>
        </div>
        <div className="courses" id="courses"></div>
        </div>
    </>
)
}

export default Introduction