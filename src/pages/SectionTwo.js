import React, {} from 'react'
import {motion} from "framer-motion"
import { StyledSection } from '../components/styles/Section.styled'


import img1 from "../components/assets/images/work/2/1.jpg"
import img3 from "../components/assets/images/work/2/2.jpg"
import img4 from "../components/assets/images/work/2/3.jpg"

import bg from "../components/assets/images/work/2/bg.png"

const SectionTwo = () => {
   
 
	return (
		<motion.section
            className="alt"
            // initial={{opacity:0}}
		    // animate={{opacity:1}}
		    // transition={{duration:1}}
            style={{backgroundImage:`url(${bg}), linear-gradient(90deg, rgba(0,192,243,1) 0%, rgba(236,0,140,1) 100%)`, color:"#fff", }}
        >
            <StyledSection>
                <div className='row'>
                    <div className='col-half images'>
                        <div className="img-box-main">
                            <div className="column left">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.25}}    
                                >
                                    <img src={img1} alt="work 1" />
                                </motion.div>
                            </div>
                            <div className="column right">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.75}}
                                >
                                    <img src={img3} alt="work 3" />
                                </motion.div>
                
                            </div>
                        </div>
                        <div className="img-box-bottom">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:1}}
                                >
                                    <img src={img4} alt="work 4" />
                                </motion.div>
                        </div>
                    </div>
                    <div className='col-half'>
                        <motion.div    
                            initial={{opacity:0, translateY:50}}
                            animate={{opacity:1, translateY:0}}
                            transition={{duration:1, delay:1.25}}
                        >
                            <h1>Heading 1</h1>
                            <h2>Background/Inspiration</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, translateY:50}}
                            animate={{opacity:1, translateY:0}}
                            transition={{duration:1, delay:1.5}}
                        >
                            <h2>Work Process</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul className="list">
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </motion.div>
                    </div>
                </div>
            </StyledSection>
        </motion.section>
			
		
	)
}

export default SectionTwo
