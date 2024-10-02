import React from 'react'

function Contact() {
  return (
   <div>
     <div class="contact-us" id="contact">
                <div class="form">
                    <form action="">
                        <input type="text" name="name" placeholder="Name"/>
                        <div class="center">
                            <input type="email" name="email" placeholder="Email"/>
                            <input type="tel" name="name" placeholder="Phone number" class="phone"/>   
                        </div>
                        <textarea name="Message" placeholder="Message"></textarea>
                        <br/>
                        <button class="explore-btn submit-btn">Submit</button>
                    </form>
                </div>
                <div class="details">
                    <h1>Contact us</h1>
                    <p>We’re here to help! If you have any questions, need support, or just want to give us feedback, please contact us via details given below or use the form. We value your input and will respond promptly. Your satisfaction is important to us, and we look forward to assisting you!</p>
                    <p><i class="fa-solid fa-phone">

                    </i> +12 9876543210</p>
                    <p><i class="fa-solid fa-envelope-circle-check"></i> xyz@email.com</p>
                    <p><i class="fa-solid fa-map-location-dot"></i> Delhi,India</p>
                </div>
            </div>
   </div>
  )
}

export default Contact