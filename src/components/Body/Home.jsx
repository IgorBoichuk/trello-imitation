import React from "react";
import { Card } from "../Card/Card";

export const Home = () => {
	return (
		<section>
			<div className="flex justify-between">
				<p>Welcome to Trello analog</p>
				<button className="border-black border border-solid px-8 py-2 bg-gray-100">Add new table!</button>
			</div>
			<Card />
		</section>
	);
};
