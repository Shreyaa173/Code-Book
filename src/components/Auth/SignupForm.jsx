/** @format */

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./index.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/operations/authAPI";

function SignupForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { firstName, lastName, email, password, confirmPassword } = formData;

	// Handle input fields, when some value changes
	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle Form Submission
	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords Do Not Match");
			return;
		}

		dispatch(
			signUp(
				formData["firstName"],
				formData["lastName"],
				formData["email"],
				formData["password"],
				formData["confirmPassword"],
				navigate
			)
		);
		// Reset
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div>
			<form
				onSubmit={handleOnSubmit}
				className="flex w-full font-semibold flex-col gap-y-4 border-[2px] border-richblack-100 p-4 py-8 rounded-lg">
				<div className="flex gap-x-4">
					<label>
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							First Name <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnChange}
							placeholder="Enter first name"
							className="form-style w-full"
						/>
					</label>
					<label>
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Last Name <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							placeholder="Enter last name"
							className="form-style w-full"
						/>
					</label>
				</div>
				<label className="w-full">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
						Email Address <sup className="text-pink-200">*</sup>
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="form-style w-full"
					/>
				</label>
				<div className="flex gap-x-4">
					<label className="relative">
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Create Password <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showPassword ? "text" : "password"}
							name="password"
							value={password}
							onChange={handleOnChange}
							placeholder="Enter Password"
							className="form-style w-full !pr-10"
						/>
						<span
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute right-3 top-[32px] z-[10] cursor-pointer">
							{showPassword ? (
								<AiOutlineEyeInvisible
									fontSize={24}
									fill="#AFB2BF"
								/>
							) : (
								<AiOutlineEye
									fontSize={24}
									fill="#AFB2BF"
								/>
							)}
						</span>
					</label>
					<label className="relative">
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Confirm Password <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showConfirmPassword ? "text" : "password"}
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleOnChange}
							placeholder="Confirm Password"
							className="form-style w-full !pr-10"
						/>
						<span
							onClick={() => setShowConfirmPassword((prev) => !prev)}
							className="absolute right-3 top-[32px] z-[10] cursor-pointer">
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible
									fontSize={24}
									fill="#AFB2BF"
								/>
							) : (
								<AiOutlineEye
									fontSize={24}
									fill="#AFB2BF"
								/>
							)}
						</span>
					</label>
				</div>
				<button
					type="submit"
					className="mt-6 rounded-[8px] font-semibold bg-yellow-50 py-[8px] px-[12px] text-richblack-900">
					Create Account
				</button>
				
				<div className="flex gap-2 flex-col mt-2">
					<div className="flex gap-2 justify-center items-center">
						<span className="h-[1px] bg-white w-[70%]"></span>
						<span className="text-white font-bold">OR</span>
						<span className="h-[1px] bg-white w-[70%]"></span>
					</div>
					<div className="flex flex-row mx-auto gap-4 justify-center items-center">
						<div className=" font-normal text-white select-none">
							Have an account?
						</div>
						<button
							className="text-blue-100 hover:text-blue-200 font-semibold cursor-pointer "
							onClick={() => navigate("/login")}>
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignupForm;
