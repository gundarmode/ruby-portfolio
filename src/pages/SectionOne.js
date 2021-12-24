import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import { StyledSection } from '../components/styles/Section.styled'
import axios from 'axios';

import img1 from "../components/assets/images/work/1/one.jpg"
import img2 from "../components/assets/images/work/1/2.jpg"
import img3 from "../components/assets/images/work/1/3.jpg"
import img4 from "../components/assets/images/work/1/4.jpg"

const SectionOne = () => {
    let exeternalData = "https://dl.dropboxusercontent.com/s/9irycp74oiftgrc/sectionOne.json?dl=0"

    const[data,setData] = useState([{}])

    useEffect(() => {
        axios.get(exeternalData, {
            // headers:{
            //     "Content-Type": "text/plain; charset=dropbox-cors-hack"
            // }
        })
        .then(res => {
            const persons = res.data;
            setData(persons)
           
        });

    },[])

 
	return (
		<motion.section
            initial={{opacity:0}}
		    animate={{opacity:1}}
		    transition={{duration:1}}
        >
            <StyledSection>
                <div className='row'>
                    <div className='col-half'>
                        <div className="img-box-main">
                            <div className="column left">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1}}    
                                >
                                    <img src={img1} alt="work 1" />
                                </motion.div>
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.5}} 
                                >
                                    <img src={img2} alt="work 2" />
                                </motion.div>
                            </div>
                            <div className="column right">
                                <motion.div 
                                    className='img-box'
                                    initial={{opacity:0, translateY:50}}
                                    animate={{opacity:1, translateY:0}}
                                    transition={{duration:1, delay:.750}}
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
                    <motion.div 
                        className='col-half'
                        initial={{opacity:0, translateY:50}}
                        animate={{opacity:1, translateY:0}}
                        transition={{duration:1, delay:1.250}}
                    >
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </motion.div>
                </div>
            </StyledSection>
        </motion.section>
			
		
	)
}

export default SectionOne
