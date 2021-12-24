import React, {useEffect, useRef} from 'react'
import {useNavigate} from "react-router-dom"
import { StyledHeader } from './styles/Header.styled'

const Header = ({windowWidth, windowHeight}) => {

    let navigate = useNavigate();

	const headerRef = useRef(null)
	const titleRef = useRef(null)
	const subTitleRef = useRef(null)
	const coolTextRef = useRef(null)
	const header1Ref = useRef(null)
	const header2Ref = useRef(null)
	const header3Ref = useRef(null)
    const btnRef = useRef(null)
    const extraBG = useRef(null)
	
	const timer = (el, time) => {
		setTimeout(() => {el.current.classList.add("active")}, time);
	}
 
	useEffect(() => {
		timer(coolTextRef, 500)	
	   	timer(headerRef, 750)
		timer(header1Ref, 1000)
		timer(header2Ref, 1250)
		timer(header3Ref, 1500)
		timer(titleRef, 1750)
		timer(subTitleRef, 2000) 
        timer(btnRef, 2500)
        
        setTimeout(() => {
            setInterval(() => {
                extraBG.current.classList.toggle("bg-transition")
            }, 4000);
        }, 2500);
        
	},[])

	return (
        <StyledHeader ref={headerRef} style={{width:`${windowWidth}px`, height:`${windowHeight}px`}}>
            <div className='extra-bg' ref={extraBG}></div>
            <div className="header-elements">
                <div className="header-element element-1" ref={header1Ref}></div>
                <div className="header-element element-2" ref={header2Ref}></div>
                <div className="header-element element-3" ref={header3Ref}></div>
            </div>
            <div className="intro-box slide" ref={titleRef}>
                <h1>Rubyann Yau</h1>
                <div className="sub-title" ref={subTitleRef}>Graphic Designer</div>
            </div>
            <div className="cool-text" ref={coolTextRef}>Rubyann Yau</div>

            <button className='btn' ref={btnRef} onClick={() => {navigate("/section-one")}}>View Portfolio</button>     
        </StyledHeader>
	)
}

export default Header
