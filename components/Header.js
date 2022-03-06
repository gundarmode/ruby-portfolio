import React, {useEffect, useRef} from 'react'
import { StyledHeader } from './../styles/Header.styled'
import Link from 'next/link'
import {motion} from "framer-motion"

const Header = ({windowWidth, windowHeight}) => {


	const headerRef = useRef(null)
	const titleRef = useRef(null)
	const subTitleRef = useRef(null)
	const coolTextRef = useRef(null)
	const header1Ref = useRef(null)
	const header2Ref = useRef(null)
	const header3Ref = useRef(null)
	const btnRef = useRef(null)
	
	const timer = (el, time) => {
		setTimeout(() => {el.current.classList.add("active")}, time);
	}
 
	useEffect(() => {
		timer(coolTextRef, 500)	
	   	timer(headerRef, 750)
		// timer(header1Ref, 1000)
		// timer(header2Ref, 1250)
		// timer(header3Ref, 1500)
		timer(titleRef, 1750)
		// timer(subTitleRef, 2000) 
		timer(btnRef, 2500)
		
		// setTimeout(() => {
		//     setInterval(() => {
		//         extraBG.current.classList.toggle("bg-transition")
		//     }, 4000);
		// }, 2500);
		
	},[])

	return (
		<StyledHeader ref={headerRef} style={{width:`${windowWidth}px`, height:`${windowHeight}px`}}>
			<div className='extra-bg'></div>
			<div className="header-elements">
				<motion.div className="header-element element-1" initial={{translateY:2000}} animate={{translateY:0}} transition={{duration:.2, delay:1}} />
				<motion.div className="header-element element-2" initial={{translateY:-2000}} animate={{translateY:0}} transition={{duration:.2, delay:1.25}} />
				<motion.div className="header-element element-3" initial={{translateY:2000}} animate={{translateY:0}} transition={{duration:.2, delay:1.5}} />
			</div>
			<div className="intro-box slide" ref={titleRef}>
				<h1>Rubyann Yau</h1>
				<div className="sub-title">Graphic Designer</div>
			</div>
			<div className="cool-text" ref={coolTextRef}>Rubyann Yau</div>

			<Link href="/section-one"><a className='btn' ref={btnRef}>View Portfolio</a></Link>  
		</StyledHeader>
	)
}

export default Header
