/** @format */

import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

export default function Card({
	imgurl,
	coursename,
	authorname,
	notes,
	ytlink,
	gfgLink,
	pdfLink,
}) {
	console.log(pdfLink);
	return (
		<div className="course-box">
			<div className="course-image">
				{/* Link for the image to open the YouTube course */}
				<a
					href={ytlink}
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={imgurl}
						alt={coursename}
					/>
				</a>
			</div>
			<div className="course-text">
				<p className="course-name">{coursename}</p>
				<p className="course-author">
					<i className="fa-solid fa-user-tie"></i> By {authorname}
				</p>
				{/* Link for the Notes section to open in a new tab */}
				<a
					href={gfgLink}
					target="_blank"
					rel="noopener noreferrer">
					<p className="lessons">
						<i className="fa-brands fa-leanpub"></i> {notes} Notes
					</p>
				</a>
				<a
					href={pdfLink}
					target="_blank"
					rel="noopener noreferrer">
					<p
						className="lessons"
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "15px",
						}}>
						<MdPictureAsPdf style={{ width: "15px", height: "15px" }} /> Pdfs
					</p>
				</a>
			</div>
		</div>
	);
}
