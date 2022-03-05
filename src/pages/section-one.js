import React, {} from 'react'
import {motion} from "framer-motion"
import { StyledSection } from '../components/styles/Section.styled'
import { GlobalStyles } from "./../styles/Globals";
// import axios from 'axios';

import img1 from "../components/assets/images/work/1/1.jpg"
import img2 from "../components/assets/images/work/1/2.jpg"
import img3 from "../components/assets/images/work/1/3.jpg"
import img4 from "../components/assets/images/work/1/4.jpg"

import bg from "../components/assets/images/work/2/bg.png"
const SectionOne = () => {
    // let exeternalData = "https://dl.dropboxusercontent.com/s/9irycp74oiftgrc/sectionOne.json?dl=0"

    // const[data,setData] = useState([{}])

    // useEffect(() => {
    //     axios.get(exeternalData, {
    //         // headers:{
    //         //     "Content-Type": "text/plain; charset=dropbox-cors-hack"
    //         // }
    //     })
    //     .then(res => {
    //         const persons = res.data;
    //         setData(persons)
           
    //     });

    // },[])

 
	return (
		<motion.section
            // initial={{opacity:1}}
		    // animate={{opacity:1}}
		    // transition={{duration:1}}
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
                            <h1>Jennie Kim - Transcription</h1>
                            <h2>Background/Inspiration</h2>
                            <p>The inspiration behind doing this transcription, was that my attention was drawn to the use of the colour palette of the poster design and the positioning of the hand movement. </p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, translateY:50}}
                            animate={{opacity:1, translateY:0}}
                            transition={{duration:1, delay:1.5}}
                        >
                            <h2>Work Process</h2>
                            <p>The process of the drawing, took just over 5 days to complete, adding layers of yellows and pink undertones to attempt to match with the reference photograph.  </p>
                            <p>In addition to this, I also used a white pen to add in the extra details to the overall drawing, trying to therefore make it realistic.​</p>
                            <p>As a result of doing this drawing, I really liked the overall outcome of the drawing as it does resemble the reference photograph in which I had used. Furthermore, I really enjoyed using a variety of the colour palette to get her skin complexion as realistic as possible.</p>
                        </motion.div>
                    </div>
                </div>
            </StyledSection>
        </motion.section>
			
		
	)
}

export default SectionOne
