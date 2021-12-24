import styled from "styled-components"

let equalMargin = "40px"

export const StyledSection = styled.div`
	width:100%; height:100%;
	.img-box-main {
		display	:flex;
		margin-bottom:${equalMargin};
		.left {
			margin-right:${equalMargin};
			.img-box {
				&:first-child {
					margin-bottom:${equalMargin};
				}
			}
		}
 }
 .col-half {
	 padding:10% 5% 15% 10%;
	 &:last-child {
		 padding:10% 15% 10% 5%
	 }
 }
`