import styled from "styled-components"
import { MediaQueries } from "./MediaQueries"

import headerImg1 from "../assets/images/header/elem-1.png"
import headerImg2 from "../assets/images/header/elem-2.png"
import headerImg3 from "../assets/images/header/elem-3.png"

import headerImg1Small from "../assets/images/header/elem-1-small.png"
import headerImg2Small from "../assets/images/header/elem-2-small.png"
import headerImg3Small from "../assets/images/header/elem-3-small.png"


export const StyledHeader = styled.header`
    position:relative;display:flex;width:1920px;height:700px;background:rgb(116,116,116);background: linear-gradient(90deg, rgba(116,116,116,1) 0%, rgba(235,235,235,1) 100%);background-size:cover;margin:auto;justify-content:center;align-items:center;text-align:center;overflow:hidden;
    &:before {position: absolute; content: "";top: 0; right: 0; bottom: 0;left: 0;background: rgb(32,35,112);background: linear-gradient(90deg, rgba(32,35,112,1) 0%, rgba(236,0,140,1) 100%); opacity: 0;
    }
    &.active {
        &:before {opacity:1; visibility:visible;transition:all ease .6s;
        }
    }
    .intro-box {
        position: relative;
    }
    .cool-text {
        font-size:12vw; color:rgba(235,235,235,0); font-weight:700; text-transform:uppercase; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:100%;  text-align:center; -webkit-text-stroke:1px #fff; -webkit-text-fill-color:none; opacity:0;
    }
    .cool-text.active {
        opacity:0.2;
    }
    .intro-box {
        h1 {
            font-size:92px; line-height:92px; font-weight:700; text-transform:uppercase; color:#fff; margin-bottom:30px;
            &:after {
                content:""; width:50px; height:2px; display:block; margin:30px auto 0; background:#fff;
            }
        }
    }
    .sub-title {
        font-size:48px; line-height:48px; font-weight:700; color:#fff
    }
    .header-elements {
        display:flex; position: absolute; width:100%; height:100%;
		@media (max-width:${MediaQueries.xLargeDevices}) {
			flex-direction:column;
		}
    }
    .header-element {
        background:url(${headerImg1}); width:33.333%; height:100%; background-size:cover;
		@media (max-width:${MediaQueries.xLargeDevices}) {
			width:100%;
			background-image:url(${headerImg1Small});
			background-size:contain;
		}
        &.element-1 {
            transform:translate(0%, 200%);
			@media (max-width:${MediaQueries.xLargeDevices}) {
				transform:translate(200%,0%);
			}
            &.active {
                transform:translate(0%,0%); transition:all ease .2s;
            }
			
        }
        &.element-2 {
            background-image:url(${headerImg2});
            transform:translate(0%, -200%);
			@media (max-width:${MediaQueries.xLargeDevices}) {
				background-image:url(${headerImg2Small});
				transform:translate(-200%,0%);
			}
            &.active {
                transform:translateY(0%); transition:all ease .2s;
            }
        }
        &.element-3 {
            background-image:url(${headerImg3});
			transform:translate(0%, 200%);
			@media (max-width:${MediaQueries.xLargeDevices}) {
				background-image:url(${headerImg3Small});
				transform:translate(200%,0%);
			}
            &.active {
                transform:translateY(0%); transition:all ease .2s;
            }
        }
		
    }
`