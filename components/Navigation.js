import React, {useState, useEffect} from 'react'
import { NavStyled } from './../styles/Nav.styled';
import {motion} from "framer-motion"
import Link from 'next/link'

let logo =  "../assets/images/layout/logo.svg"
let logo2 = "../assets/images/layout/logo-white.svg"
let img1 = "../assets/images/work/thumbs/2.jpg"
let img2 = "../assets/images/work/thumbs/1.jpg"

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

const Navigation = ({navAnimation, setNavAnimation, windowWidth, windowHeight, display}) => {
	const[navButton, setNavButton] = useState(false)

	return (
				
		<NavStyled>
			<div className={`main-nav${navAnimation ? " active" : ""}`}>
				
				<div className='logo'><img src={display ? logo : logo2} alt="Logo" /></div>
				<button className={`nav-button${navButton ? " active" : ""}${display ? " alt" : ""}`} onClick={() => {setNavButton(!navButton)}}></button>
				<nav className={`nav${navButton ? " active" : ""}`} style={{width:`${windowWidth}px`, minHeight:`${windowHeight}px`}}>
					<div className='menu-title'>Menu</div>
					<ul>
						<li><button><Link href="/section-one">Section One</Link></button></li>
						<li><button>Section Two</button></li>
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
						images.map((item, index) => {
							const{imagePath, linkPath, transitionTiming} = item;
							return(
								<div key={index}>
									
									<motion.div 
											className='box'
											onClick={()=>{linkPath}}
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
