import React from "react";

export const Header = () => {
	return (
		<div className="flex justify-between">
			<p>Welcome to Trello analog</p>
			<button className="border-black border border-solid px-8 py-2">Add new table!</button>
		</div>
	);
};
