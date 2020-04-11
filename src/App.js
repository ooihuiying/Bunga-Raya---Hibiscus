import React from "react";
import { Container } from "react-bootstrap";

//import Background from "./components/Background";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Background from "./assets/chendol.jpg";

const styles = {
	root: {
		width: '100vw',
    height: '100vh',
    textAlign: "center",
		display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
	},
	main: {
		flexGrow: "0.85",
	},
	container: {
    marginTop: "15vh",
    height: "100%",
	},
};

function App() {
	return (
		<div style={styles.root}>
			<main style={styles.main}>
				<Container style={styles.container}>
					<Countdown />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
