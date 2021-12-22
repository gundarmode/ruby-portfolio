import React, {useState, useEffect} from 'react'

const Header = ({windowWidth, windowHeight}) => {

    const [header, setHeader] = useState(false)
    const [title, setTitle] = useState(false);
    const [subTitle, setSubTitle] = useState(false);

    const [coolText, setCoolText] = useState(false)

    const[header1, setHeader1] = useState(false)
    const[header2, setHeader2] = useState(false)
    const[header3, setHeader3] = useState(false)
   
    useEffect(() => {
        setTimeout(() => {setCoolText(true)}, 500);
        setTimeout(() => {setHeader(true)}, 750);

        setTimeout(() => {setHeader1(true)}, 1000);
        setTimeout(() => {setHeader2(true)}, 1250);
        setTimeout(() => {setHeader3(true)}, 1500);
    
        setTimeout(() => {setTitle(true)}, 1750);
        setTimeout(() => {setSubTitle(true)}, 2000);      
    },[])

    return (
        <header 
            className={`fade-in${header ? " active" : ""}`}
            style={{width:`${windowWidth}px`, height:`${windowHeight}px`}}
        >
            <div className="header-elements">
                <div className={`header-element element-1${header1 ? " active" : ""}`}></div>
                <div className={`header-element element-2${header2 ? " active" : ""}`}></div>
                <div className={`header-element element-3${header3 ? " active" : ""}`}></div>
            </div>
            <div className={`intro-box slide${title ? " active" : ""}`}>
                <h1>Rubyann Yau</h1>
                <div className={`sub-title slide${subTitle ? " active" : ""}`}>Graphic Designer</div>
            </div>
            <div className={`cool-text${coolText ? " active" : ""}`}>Rubyann Yau</div>

            <button className='btn'>Start</button>
        </header>
    )
}

export default Header
