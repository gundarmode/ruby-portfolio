
import {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import SectionOne from "./components/SectionOne";

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
            <Header windowWidth={size.windowWidth} windowHeight={size.windowHeight} />
		    <SectionOne />
        </>
		
		
	);
}

export default App;
