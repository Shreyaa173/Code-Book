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
		<nav id="" className=" flex justify-center items-center">
			<div className="nav-icon1 w-auto">
				<img
					src={Logo}
					alt=""
					className="logo1 w-[100px] h-[100px]"
				/>
				<p className="text-[18px] w-[200px] font-bold">Code Book</p>
			</div>
			<div className="nav-text1">
				<ul className="nav-list1">
					<li className="nav-item1">
						<a href="#explore">Courses</a>
					</li>
					<li className="nav-item1">
						<a href="#testimonal">Testimonials</a>
					</li>
					<li className="nav-item1">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			{user ? (
				<button
					className="px-4 text-center py-3 mx-auto rounded-lg border-[1px]  border-richblack-200 hover:bg-richblack-800 text-white hover:text-white"
					onClick={() => dispatch(logout(navigate))}>
					LogOut
				</button>
			) : (
				<Link
					to="/signup"
					className={`px-4 text-center rounded-lg mx-auto py-3 border-[1px] border-blue-800 hover:bg-blue-600  hover:text-white transition-colors duration-300`}>
					Sign Up
				</Link>
			)}
		</nav>
	);
}

export default Navbar;
