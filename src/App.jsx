import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Container } from "./components/shared/Container";

function App() {
	return (
		<div>
			<Container>
				<Header />
				<Card />
			</Container>
		</div>
	);
}

export default App;
