import React from "react";

export const Card = () => {
	return (
		<div className="border max-w-xs ">
			<div className="border-b flex justify-between items-center px-2">
				<p className="font-bold">Todo</p>
				<button className="border py-2 px-5 bg-gray-50">click</button>
			</div>

			<button className="border py-2 px-5 bg-gray-50">Add task</button>
		</div>
	);
};
