
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header';
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import { GlobalStyles } from "./components/styles/Globals";
import Navigation from "./components/Navigation";

function App() {

 
    const[navAnimation,setNavAnimation] = useState(true)

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
                <Navigation navAnimation={navAnimation} setNavAnimation={setNavAnimation} windowWidth={size.windowWidth} windowHeight={size.windowHeight}/>	
				<Routes>
					<Route path="/" element={<Header windowWidth={size.windowWidth} windowHeight={size.windowHeight} />} />
					<Route path="/section-one" element={<SectionOne />} />
                    <Route path="/section-two" element={<SectionTwo />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
