import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate } from "react-router-dom"
import { NavStyled } from './styles/Nav.styled';
import {motion} from "framer-motion"

import img1 from "../components/assets/images/work/thumbs/1.jpg"
import img2 from "../components/assets/images/work/thumbs/2.jpg"

const images = [
	{
		imagePath: img1,
		linkPath: "/section-one",
		transitionTiming: 2
	},
	{
		imagePath:img2,
		linkPath: "/section-two",
		transitionTiming: 2.5
	}	
]

const Navigation = ({navAnimation, setNavAnimation, windowWidth, windowHeight}) => {

	const location = useLocation().pathname;;
	const [thumbs, setThumbs] = useState(images)
	const [display, setDisplay] = useState(null);
	const [count, setCount] = useState(1)
	const[navButton, setNavButton] = useState(false)
	// let nextCount = count + 1
	let pageTotal = 2;
	let navigate = useNavigate();

	// const prevButton = () => {
	// 	if (count === 1 ) {
	// 		setCount(pageTotal)
	// 		checkCounter(pageTotal)
	// 	} else{
	// 		setCount(count - 1)
	// 		checkCounter(count - 1)
	// 	}
		
	// }
	// const nextButton = () => {
	// 	if (count === pageTotal) {
	// 		setCount(1)
	// 		checkCounter(1)
	// 	}else {
	// 		setCount(count + 1)
	// 		checkCounter(count + 1)
	// 	}
		
	// }

	// const checkCounter = (count) => {
	// 	switch(count) {
	// 		case 1 : navigate("/section-one"); 
	// 		break;
	// 		case 2 : navigate("/section-two"); 
	// 		break;
	// 		default : break;
	// 	}
	// }

	useEffect(() => {
		setDisplay(location !== "/ruby-portfolio" ? true : false)
		switch (location) {
			// case "/" : 
			// setNavAnimation(false)
			// break;
			case "/section-one": 
				setCount(1)
				setNavAnimation(false)
			break;
			case "/section-two":
				setCount(2)
				setNavAnimation(false)
			break;
			default:
			break;
		}
	}, [location, setNavAnimation])

	return (
				
		<NavStyled>
			<div className={`main-nav${navAnimation ? " active" : ""}`}>
				<div className='logo'>Rubyann Yau</div>
				<button className={`nav-button${navButton ? " active" : ""}`} onClick={() => {setNavButton(!navButton)}}></button>
				<nav className={`nav${navButton ? " active" : ""}`} style={{width:`${windowWidth}px`, minHeight:`${windowHeight}px`}}>
                    <div className='menu-title'>Menu</div>
					<ul>
						<li><button onClick={()=> {navigate("/section-one"); setNavButton(false)}}>Section One</button></li>
                        <li><button onClick={()=> {navigate("/section-two"); setNavButton(false)}}>Section Two</button></li>
					</ul>
				</nav>
			</div>
			{display && (
			<div>
				{/* <div className='side-buttons'>
					<button onClick={()=>{prevButton()}}>Prev</button>
					<button onClick={()=>{nextButton()}}>Next</button>
				</div> */}
				<div className='bottom-nav'>
					{
						thumbs.map((item, index) => {
							const{imagePath, linkPath, transitionTiming} = item;
							return(
								<div key={index}>
									
                                    <motion.div 
                                            className='box'
                                            onClick={()=>{navigate(linkPath)}}
                                            initial={{opacity:0, translateY:25}}
                                            animate={{opacity:1, translateY:0}}
                                            transition={{duration:1, delay:transitionTiming}}  
                                           
                                        >
                                            <motion.div
                                             whileHover={{ scale: 1.2,transition: { duration: .2 },}}
                                            >
                                                <img src={imagePath} alt="Thumbs" />
                                            </motion.div>
                                        </motion.div>
										
										
									
								</div>    
							)
						})
					}
				</div>
			</div>
			)}
		</NavStyled>
		
	)
}

export default Navigation
