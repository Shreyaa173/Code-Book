import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/apis";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState();
    const [phnNumber, setPhnNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const submitContactForm = async (e) => {
        e.preventDefault();
        console.log("Form Data - ", name, email, msg, phnNumber);
        if (!email || !name || !phnNumber || !msg || phnNumber.length !== 10) {
            toast.error("Please enter correct data");
            return;
        }
        const data = {
            name: name,
            email: email,
            message: msg,
            phoneNo: phnNumber
        };

        const toastId = toast.loading("Loading...");
        try {
            setLoading(true);
            const res = await apiConnector(
                "POST",
                contactusEndpoint.CONTACT_US_API,
                data
            );
            toast.success("Message sent successfully!");
            console.log("Email Res - ", res);
            setEmail("");
            setName("");
            setMsg("");
            setPhnNumber("");
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message);
            setLoading(false);
        }
        toast.dismiss(toastId);
        setLoading(false);
    };
return (
<div>
<h1>Contact us</h1>
    <div className="contact-us">
                <div className="form">
                    <form action="" onSubmit={submitContactForm}>
                        <input type="text" name="name" placeholder="Name" className='name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <div className="center">
                            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="tel" name="name" placeholder="Phone number" className="phone" value={phnNumber} onChange={(e) => setPhnNumber(e.target.value)}/>   
                        </div>
                        <textarea name="Message" placeholder="Message" onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
                        <br/>
                        <button disabled={loading} className="explore-btn submit-btn" type='submit'>Submit</button>
                    </form>
                </div>
                <div className="details">
                    <p>We’re here to help! If you have any questions, need support, or just want to give us feedback, please contact us via details given below or use the form. We value your input and will respond promptly. Your satisfaction is important to us, and we look forward to assisting you!</p>
                    <p><i className="fa-solid fa-phone">

                    </i> +12 9876543210</p>
                    <p><i className="fa-solid fa-envelope-circle-check"></i> xyz@email.com</p>
                    <p><i className="fa-solid fa-map-location-dot"></i> Delhi,India</p>
                </div>
            </div>
</div>
)
}

export default Contact