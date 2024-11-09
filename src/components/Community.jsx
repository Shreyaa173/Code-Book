/* src/components/CollaborationForm.jsx*/
import { useState } from 'react';
import './Community.css';
import { Link } from "react-router-dom";

const CollaborationForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Here, you can add logic to handle form submission, like sending data to an API
console.log('Form submitted:', { name, email, message });
// Clear the form fields after submission
setName('');
setEmail('');
setMessage('');
};

return (
<div className="collaboration-container">
<h2>Community Collaboration Form</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="message">Message:</label>
<textarea
id="message"
value={message}
onChange={(e) => setMessage(e.target.value)}
required
></textarea>
</div>
<button type="submit" id='community-button'>Submit</button>
</form>
</div>
);
};

export default CollaborationForm;