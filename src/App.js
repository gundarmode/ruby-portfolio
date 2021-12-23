
import {useState, useEffect} from "react";
import Header from './components/Header';
import SectionOne from "./components/SectionOne";
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
        <>
            <GlobalStyles />
            <Header windowWidth={size.windowWidth} windowHeight={size.windowHeight} />
		    <SectionOne />
        </>
		
		
	);
}

export default App;
