import React from "react";
import styled from "styled-components";
import { NavButton } from "../index";

const StyledNavbar = styled.header`
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 2.5vh 1vw;
  height: 4vh;
  width: calc(100vw - 2vw);
  border-top: 4px solid rgba(255, 255, 255, 0.1);
  border-bottom: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px black;
`;

const StyledNavButton = styled(NavButton)`
  margin: 0 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: whitesmoke;
  transition: all ease 0.5s;

  &:hover {
    filter: brightness(70%);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div></div>
      <div>
        <StyledNavButton to="/">Home</StyledNavButton>
        <StyledNavButton to="/projects">Projects</StyledNavButton>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
