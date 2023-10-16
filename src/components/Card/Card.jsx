import React from "react";

export const Card = () => {
	return (
		<div className="border max-w-xs h-96 flex flex-col justify-start text-center">
			<div className="border-b flex justify-between items-center px-2 mb-10">
				<p className="font-bold py-3">Todo</p>
				<button className="border border-black py-0 px-2 bg-gray-50 rounded-full">x</button>
			</div>
			<p className="p-3 text-cyan-500 font-bold mb-16">Empty table!</p>
			<button className="border py-2 px-5 bg-gray-50 w-36 ml-auto mr-auto">Add task</button>
		</div>
	);
};
