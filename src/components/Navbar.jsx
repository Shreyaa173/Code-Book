/** @format */

import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";
import { Link } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	return (
		<nav
			id="nav1"
			className="flex justify-around items-center bg-[#13072e] w-[100%] fixed">
			<div className="flex flex-row justify-center items-center gap-4 ml-[-80px]">
				<img
					src={Logo}
					alt=""
					className="logo1 w-[90px] h-[90px] cursor-pointer"
					onClick={()=> navigate("/")}
				/>
				<p className="text-[18px] w-[200px] font-bold">Code Book</p>
			</div>
			<div className="flex flex-row font-semibold">
				<ul className="flex flex-row gap-8 text-[16px]">
					<li className="ml-[20px] mr-[20px] px-4">
						<a
							className=" text-richblack-50 font-semibold hover:text-richblack-5 "
							href="#explore">
							Courses
						</a>
					</li>
					<li className="ml-[20px] mr-[20px] px-4">
						<a
							className=" text-richblack-100 font-semibold hover:text-richblack-5 "
							href="#testimonal">
							Testimonials
						</a>
					</li>
					<li className="ml-[20px] mr-[20px] px-4">
						<a
							className=" text-richblack-100 font-semibold hover:text-richblack-5"
							href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
			{user ? (
				<button
					className="text-richblack-100 font-semibold hover:text-richblack-5 text-[16px] hover:bg-richblack-700 border-[1px] border-richblack-200 px-4 py-2 rounded-md"
					onClick={() => dispatch(logout(navigate))}>
					LogOut
				</button>
			) : (
				<Link
					to="/signup"
					className=" text-richblack-100 font-semibold hover:text-richblack-5 text-[16px] hover:bg-richblack-700 border-[1px] border-richblack-200 px-4 py-2 rounded-md">
					Sign Up
				</Link>
			)}
		</nav>
	);
}

export default Navbar;
