
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./../styles/theme.config";
import Navigation from '../components/Navigation';
import {useState, useEffect} from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

    const[navAnimation,setNavAnimation] = useState(true)
    const [display, setDisplay] = useState(false);

    const router = useRouter()

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

        setDisplay(router.pathname !== "/" ? true : false)

        
	}, [router])
    
    return (
        <ThemeProvider theme={lightTheme} key={router.asPath}>
            <GlobalStyles />
            <Navigation navAnimation={navAnimation} setNavAnimation={setNavAnimation} windowWidth={size.windowWidth} windowHeight={size.windowHeight} display={display} />
            <Component windowWidth={size.windowWidth} windowHeight={size.windowHeight} {...pageProps} router={router}  />
        </ThemeProvider>
    )
 
}

export default MyApp
