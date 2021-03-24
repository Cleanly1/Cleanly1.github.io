import React from "react";
import styled from "styled-components";
import Clock from "../Clock";
import Navbar from "../Navbar";
import { ThemeProvider } from "styled-components";
import { ThemeContext, themes } from "../../utils/theme";

const ContainerDiv = styled.div`
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.background};
  font-family: "Roboto Mono", monospace;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  padding-top: calc(10vh + 8px);
  width: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.button};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1.125rem;
  margin: 0 0.5rem;
  width: 2.5rem;
  text-align: center;

  &:hover {
    filter: brightness(70%);
  }
`;

const Message = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: ${(props) => props.theme.message};
  padding: 5px;

  & p {
    color: ${(props) => props.theme.textColor};
    margin: 0;
  }
`;

class Container extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <ThemeProvider theme={theme}>
            <ContainerDiv>
              <Navbar>
                <StyledButton onClick={toggleTheme}>
                  {theme === themes.dark ? "🌞" : "🌙"}
                </StyledButton>
              </Navbar>
              <StyledWrapper>{this.props.children}</StyledWrapper>
              <Clock />
              <Message>
                <p>
                  This site is under construction{" "}
                  <span role="img" aria-label="hammer">
                    🔨
                  </span>
                </p>
              </Message>
            </ContainerDiv>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Container;
