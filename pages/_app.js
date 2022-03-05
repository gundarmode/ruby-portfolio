
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./../styles/theme.config";
import Navigation from '../components/Navigation';
import {useState, useEffect} from "react";

function MyApp({ Component, pageProps }) {

    const[navAnimation,setNavAnimation] = useState(true)
    const [display, setDisplay] = useState(false);

	// Get window width and height
	const [size, setSize] = useState({
        // windowWidth: window.innerWidth,
		// windowHeight: window.innerHeight
    })
	const updateSize = () => {
		setSize({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
	}

 
	useEffect(() => {
        setSize({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
		window.onresize = updateSize
	}, [])

    useEffect(() => {
        if (window.location.pathname !== "/") {
            setDisplay(true)
        }	
	}, [display])


    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Navigation navAnimation={navAnimation} setNavAnimation={setNavAnimation} windowWidth={size.windowWidth} windowHeight={size.windowHeight} display={display}/>
            <Component windowWidth={size.windowWidth} windowHeight={size.windowHeight} {...pageProps} />
        </ThemeProvider>
    )
 
}

export default MyApp
