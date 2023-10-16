import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex justify-between bg-cyan-600 py-5 px-5 text-2xl">
			<nav className="flex gap-5 ">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/">About</NavLink>
				<NavLink to="/">Trello</NavLink>
			</nav>
			<div className="flex gap-5">
				<Link to="/">Login</Link>
				<Link to="/">Register</Link>
				<Link to="/">Logout</Link>
			</div>
		</header>
	);
};
