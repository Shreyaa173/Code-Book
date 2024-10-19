import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function TestimonialCard({description,imgurl,name,role,location}) {
return (
        <li className="card">
            <div className="user-card">
                <div className="user">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>{description}</p>
                    <img src={imgurl} alt="image" draggable="false" className='testimonial-image'/>
                    <div className="user-text">
                        <p className="name">{name}</p>
                        <p>{role}, {location}</p>
                    </div>
                </div>
            </div>
        </li>
)
}

export default TestimonialCard