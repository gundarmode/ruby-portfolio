import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate } from "react-router-dom"
import { NavStyled } from './styles/Nav.styled';

const Navigation = () => {

	const location = useLocation().pathname;;

	const [display, setDisplay] = useState(null);
	const [count, setCount] = useState(1)
	let nextCount = count + 1
	let pageTotal = 2;
	let navigate = useNavigate();

	const prevButton = () => {
        if (count === 1 ) {
			setCount(pageTotal)
			checkCounter(pageTotal)
		} else{
			setCount(count - 1)
			checkCounter(count - 1)
		}
        
    }
    const nextButton = () => {
		if (count === pageTotal) {
			setCount(1)
			checkCounter(1)
		}else {
			setCount(count + 1)
			checkCounter(count + 1)
		}
		
    }

	const checkCounter = (count) => {
		switch(count) {
			case 1 : navigate("/section-one"); 
			break;
			case 2 : navigate("/section-two"); 
			break;
			default : break;
		}
	}

	useEffect(() => {
		setDisplay(location !== "/" ? true : false)
		switch (location) {
			case "/section-one": setCount(1)
			break;
			case "/section-two":setCount(2)
			break;
			default:
			break;
		}
	}, [location])

	return (
	
			<>
				{display && (
					<NavStyled>
						<div className='side-buttons'>
							<button onClick={()=>{prevButton()}}>Previous Work: {count}</button>
							<button onClick={()=>{nextButton()}}>Next Work: {nextCount}</button>
						</div>
						

					</NavStyled>
				)}
			</>
		
	)
}

export default Navigation
