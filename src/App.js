
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header';
import SectionOne from "./pages/SectionOne";
import { GlobalStyles } from "./components/styles/Globals";

function App() {

	// Get window width and height
	const [size, setSize] = useState({
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight
	})

	const updateSize = () => {
		setSize({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
	}
	
	useEffect(() => {
		window.onresize = updateSize
	}, [])
	
	return (
		<Router>
			<>
				<GlobalStyles />		
				<Routes>
					<Route path="/" element={<Header windowWidth={size.windowWidth} windowHeight={size.windowHeight} />} />
					<Route path="/section-one" element={<SectionOne />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
