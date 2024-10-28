/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Import the custom CSS file

const Error = () => {
	return (
		<section className="error-section">
			<div>
				<div className="error-container">
					<div className="error-image">
						<h1 className="error-title">404 - Page Not Found !!</h1>
					</div>

					<div className="error-content" style={{"color": "black"}}>
						<h3 className="error-subtitle">Look like you're lost</h3>

						<p className="error-description">
							The page you are looking for not available!
						</p>

						<Link
							to="/"
							className="error-home-button">
							Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
