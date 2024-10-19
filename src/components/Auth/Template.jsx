/** @format */

import { useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LoginImg from "../../assets/login.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import SignupImg from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Template({ formType }) {
	const { loading } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	return (
		<div>
			<div className="grid h-[100vh]  place-items-center bg-slate-100">
				{loading ? (
					<div className="spinner"></div>
				) : (
					<div className="flex">
						<div
							className="pt-[80px] cursor-pointer relative"
							onClick={() => navigate("/")}>
							<FaArrowCircleLeft
								className="w-[30px] h-[30px] absolute bg-black rounded-full"
								onClick={() => navigate("/")}
							/>
						</div>
						<div className="mx-auto flex md:mt-12 mt-4 sm:mt-8  max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 w-[80vw] text-black">
							<div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
								<h1 className="text-[30px] text-center font-semibold leading-[2.375rem] text-richblack-5">
									{formType === "signup" ? "Signup Page" : "Login Page"}
								</h1>
								<p className="mt-4 text-[1.125rem] text-center leading-[1.625rem] mb-2">
									<span className="text-center font-edu-sa font-bold italic text-white">
										{"Welcome to user in my platform"}
									</span>
								</p>
								{formType === "signup" ? <SignupForm /> : <LoginForm />}
							</div>
							<div className="relative mx-auto w-11/12 mt-[100px] max-w-[450px] md:mx-0">
								<img
									src={formType === "signup" ? SignupImg : LoginImg}
									alt="Pattern"
									width={558}
									height={504}
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Template;
