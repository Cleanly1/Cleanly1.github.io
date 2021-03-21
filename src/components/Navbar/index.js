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
  height: 5vh;
  width: calc(100vw - 2vw);
  border-top: 4px solid ${(props) => props.theme.borderNav};
  border-bottom: 4px solid ${(props) => props.theme.borderNav};
  box-shadow: 0 0 20px black;
`;

const StyledNavButton = styled(NavButton)`
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.button};
  color: whitesmoke;
  transition: all ease 0.5s;

  &:hover {
    filter: brightness(70%);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      <div></div>
      <ButtonContainer>
        <StyledNavButton to="/">Home</StyledNavButton>
        <StyledNavButton to="/projects">Projects</StyledNavButton>
        {children}
      </ButtonContainer>
    </StyledNavbar>
  );
};

export default Navbar;
