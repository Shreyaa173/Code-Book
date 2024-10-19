/** @format */

import React from "react";
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/apis";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const submitContactForm = async (data) => {
		console.log("Form Data - ", data);
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
		} catch (error) {
			console.log("ERROR MESSAGE - ", error.message);
			setLoading(false);
		}
		toast.dismiss(toastId);
		setLoading(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "",
				name: "",
				message: "",
				phoneNo: "",
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div>
			<h1 className="text-[80px] font-bold">Contact us</h1>
			<div
				className="contact-us"
				id="contact">
				<div className="form text-richblack-900">
					<form
						onSubmit={handleSubmit(submitContactForm)}
						className="flex flex-col justify-center items-start">
						<div className="flex flex-col gap-2">
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="name bg-richblack-700 text-white"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="-mt-10 ml-12  text-[12px] text-yellow-100">
									Please enter your name.
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="bg-richblack-700 text-white"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<span className="-mt-10 ml-12  text-[12px] text-yellow-100">
									Please enter your valid Email address.
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2 mt-2">
							<input
								type="tel"
								name="phoneNo"
								placeholder="Phone number"
								className="phoneNo bg-richblack-700 text-white"
								{...register("phoneNo", {
									required: {
										value: true,
										message: "Please enter your Phone Number.",
									},
									maxLength: { value: 10, message: "Invalid Phone Number" },
									minLength: { value: 10, message: "Invalid Phone Number" },
								})}
							/>
							{errors.phoneNo && (
								<span className="-mt-10 ml-12 text-[12px] text-yellow-100">
									{errors.phoneNo.message}
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2 ml-[30px] mt-2">
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="7"
								className="p-3 text-[16px] text-white bg-richblack-700 leading-[24px]  shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400  h-auto "
								placeholder="Enter your message here"
								{...register("message", { required: true })}></textarea>
							{errors.message && (
								<span className="-mt-1 text-[12px] text-yellow-100">
									Please enter your Message..
								</span>
							)}
						</div>
						<button
							disabled={loading}
							className="explore-btn submit-btn mt-10">
							Submit
						</button>
					</form>
				</div>
				<div className="details">
					<p>
						We’re here to help! If you have any questions, need support, or just
						want to give us feedback, please contact us via details given below
						or use the form. We value your input and will respond promptly. Your
						satisfaction is important to us, and we look forward to assisting
						you!
					</p>
					<p>
						<i className="fa-solid fa-phone"></i> +12 9876543210
					</p>
					<p>
						<i className="fa-solid fa-envelope-circle-check"></i> xyz@email.com
					</p>
					<p>
						<i className="fa-solid fa-map-location-dot"></i> Delhi,India
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
