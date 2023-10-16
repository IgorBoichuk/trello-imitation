import { Route, Routes } from "react-router-dom";
import "./App.css";

import { SharedLayout } from "./components/SharedLeyout/SharedLayout";
import { Home } from "./components/Body/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
