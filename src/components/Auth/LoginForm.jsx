/** @format */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./index.css"

import { login } from "../../services/operations/authAPI";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password, navigate));
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className="mt-6 flex w-full flex-col gap-y-4 border-[2px] border-richblack-100 p-4 py-8 rounded-lg">
			<label className="w-full">
				<p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold text-richblack-5">
					Email Address <sup className="text-pink-200 font-semibold">*</sup>
				</p>
				<input
					required
					type="text"
					name="email"
					value={email}
					onChange={handleOnChange}
					placeholder="Enter email address"
					className="form-style  w-full font-semibold"
				/>
			</label>
			<label className="relative">
				<p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold text-richblack-5">
					Password <sup className="text-pink-200 font-semibold ">*</sup>
				</p>
				<input
					required
					type={showPassword ? "text" : "password"}
					name="password"
					value={password}
					onChange={handleOnChange}
					placeholder="Enter Password"
					className="form-style w-full font-semibold !pr-10"
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
			<button
				type="submit"
				className="mt-6 rounded-[8px] font-semibold bg-yellow-50 py-[8px] px-[12px] text-richblack-900">
				Sign In
			</button>
			<div className="flex gap-2 flex-col mt-2">
				<div className="flex gap-2 justify-center items-center">
					<span className="h-[1px] bg-white w-[70%]"></span>
					<span className="text-white font-bold">OR</span>
					<span className="h-[1px] bg-white w-[70%]"></span>
				</div>
				<div className="flex flex-row gap-4 mx-auto justify-center items-center text-white">
					<div className=" font-normal select-none">Don't have an account?</div>
					<button
						className="text-blue-100 hover:text-blue-200 font-semibold cursor-pointer"
						onClick={() => navigate("/signup")}>
						New Account
					</button>
				</div>
			</div>
		</form>
	);
}

export default LoginForm;
