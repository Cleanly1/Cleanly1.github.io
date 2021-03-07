import React from "react";
import styled, { css } from "styled-components";
import Box from "../Box";

const StyledH1 = styled.h1`
  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: all ease 0.5s;
`;
const StyledP = styled.p`
  opacity: ${(props) => (props.display ? 1 : 0)};
  transition: all ease 0.5s;
`;

const ProjectContainer = styled(Box)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 20vh;
  margin: 10px;
  ${(props) => props.style || "border-bottom: 0px solid black;"}
`;

const hover = css`
  border-bottom: 3px solid white;
  background-color: black;
  border-radius: 5px;
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      show: { display: "none" },
    };
  }

  showContent() {
    this.setState({
      hover: hover,
      hide: true,
    });
    setTimeout(() => {
      this.setState({
        hideStyle: { display: "none" },
        show: { display: "block" },
      });
      setTimeout(() => {
        this.setState({ display: true });
      }, 200);
    }, 500);
  }

  hideContent() {
    this.setState({
      hover: "",
      display: false,
    });

    setTimeout(() => {
      this.setState({
        hideStyle: { display: "block" },
        show: { display: "none" },
      });
      setTimeout(() => {
        this.setState({ hide: false });
      }, 10);
    }, 500);
  }

  render() {
    return (
      <ProjectContainer
        onMouseEnter={() => this.showContent()}
        onMouseLeave={() => this.hideContent()}
        style={this.state.hover}
      >
        <StyledH1 hide={this.state.hide} style={this.state.hideStyle}>
          Hello
        </StyledH1>
        <StyledP display={this.state.display} style={this.state.show}>
          This is a Project
        </StyledP>
      </ProjectContainer>
    );
  }
}

export default Project;
