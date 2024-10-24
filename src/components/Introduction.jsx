import React from 'react';
import home from "../assets/home.png";
import { useNavigate } from 'react-router-dom';

function Introduction() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <>  
            <div className='home'>
                <div className="home-text" id="introduction">
                    <div className="left-text">
                        <div className="top-text">
                            <button className="top-button">Code Your Way to Success</button>
                        </div>
                        <div className="mid-text">
                            <p>Welcome to Code Book, your ultimate coding destination...</p>
                        </div>
                        <div className="explore">
                            <button 
                                className="explore-btn" 
                                onClick={handleGetStartedClick}
                            >
                                Get Started (It's free) <i className="fa-solid fa-laptop-file"></i>
                            </button>
                        </div>
                    </div>    
                    <div className="right-image">
                        <img src={home} alt="" className="home-image"/>
                    </div>
                </div>
                <div className="explore" id="explore"></div>
            </div>
        </>
    );
}

export default Introduction;
