import styled from "styled-components"

export const NavStyled = styled.div `
    .side-buttons{
        position:relative;
        button {
            position:fixed;top:50%; transform:translateY(-50%);z-index:99; width:120px; height:100px; border:0; border-radius:50%;left:-20px; right:auto; padding:0 25px; text-align:center; cursor:pointer;
            &:last-child {
                right:-20px; left:auto;padding:0 25px;
            }
        }
    }
    

`