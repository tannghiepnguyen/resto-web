import About from "./components/About";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<div id="home">
					<Home />
				</div>
				<div id="dishes">
					<Dishes />
				</div>
				<div id="about">
					<About />
				</div>
				<div id="menu">
					<Menu />
				</div>
				<div id="review">
					<Review />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
