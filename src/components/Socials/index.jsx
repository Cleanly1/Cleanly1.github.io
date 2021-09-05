import React from "react";
import styled from "styled-components";


const Logo = styled.img`
  height: 4rem;
  background-color: ${(props) => props.theme.button};
  color: whitesmoke;
  transition: all ease 0.5s;
`

const StyledA = styled.a`
  color: whitesmoke;
  transition: all ease 0.5s;

  &:hover {
    filter: brightness(70%);
  }
  `

function Socials({src, to}){

  return (
    <StyledA href={to}>
      <Logo src={src}/>
    </StyledA>
  )
}

export default Socials;
