import React from "react";
import { Container } from "../shared/Container";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
	return (
		<div>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};
