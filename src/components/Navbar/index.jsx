import React from 'react';
import Styled from 'styled-components';
import NavButton from '../NavButton';

const StyledNavbar = Styled.header`
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 2.5vh 1vw;
  height: 5vh;
  width: calc(100% - 2vw);
  border-top: 4px solid ${(props) => props.theme.borderNav};
  border-bottom: 4px solid ${(props) => props.theme.borderNav};
  box-shadow: 0 0 20px black;
  z-index: 10;
`;

const StyledNavButton = Styled(NavButton)`
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

const Logo = Styled.img`
  height: 5vh;
  width: auto;
`;

const ButtonContainer = Styled.nav`
  display: flex;
`;

const NameLogo = Styled.div`
  display: flex;
  align-items: center;

  span {
    display: none;

    @media (min-width: 768px){
      display: block;
      margin-left: 1rem;
    }

  }
`;

const Navbar = ({ children }) => {
	return (
		<StyledNavbar>
			<NameLogo>
				<Logo src="/assets/images/logo.gif" alt="Logo" />
				<span>Oskar Turesson</span>
			</NameLogo>
			<ButtonContainer>
				<StyledNavButton to={process.env.PUBLIC_URL + '/'} label="Home">
					Home
				</StyledNavButton>
				<StyledNavButton to={process.env.PUBLIC_URL + '/about'} label="About">
					About me
				</StyledNavButton>
				<StyledNavButton
					to={process.env.PUBLIC_URL + '/projects'}
					label="Projects"
				>
					Projects
				</StyledNavButton>
				{children}
			</ButtonContainer>
		</StyledNavbar>
	);
};

export default Navbar;
