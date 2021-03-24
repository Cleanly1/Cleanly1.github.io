import React from "react";
import { Link } from "@reach/router";
import styled, { css } from "styled-components";
import Box from "../Box";
import { getTechString } from "../../utils/functions";

const ProjectContainer = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: calc(100vw - 4rem);
  transition: border ease 0.8s, background ease 0.8s;

  ${(props) =>
    props.style ||
    css`
      border-top: 4px solid ${(props) => props.theme.border};
      border-bottom: 4px solid ${(props) => props.theme.border};
    `}
  @media (min-width: 426px) {
    padding: 2rem 8rem;
    width: calc(100vw - 16rem);
  }

  @media (min-width: 1024px) {
    flex-flow: row nowrap;
    height: 30vh;
    padding: 2rem;
    width: calc(100vw - 4rem);
  }
`;

const hover = css`
  border-top: 4px solid ${(props) => props.theme.borderActive};
  border-bottom: 4px solid ${(props) => props.theme.borderActive};
  background-color: ${(props) => props.theme.backgroundActive};
`;

const StyledH1 = styled.h1`
  position: ${(props) => (props.styling ? "absolute" : "relative")};
  display: block;
  transform: translateX(${(props) => (props.hide ? "-200%" : 0)});
  transition: all ease 0.4s;
  margin: 0;
  margin-bottom: 1rem;
  width: fit-content;

  @media (min-width: 768px) {
    height: auto;
    transform: translateX(${(props) => (props.hide ? "-100vw" : 0)});
  }

  @media (min-width: 1024px) {
    transform: translateX(${(props) => (props.hide ? "-200%" : 0)});
  }
`;

const StyledP = styled.p`
  position: relative;
  margin: 0;
  margin-bottom: 1rem;
  ${(props) => props.styling || "display: none;"}
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all ease 0.4s;
  width: 100%;

  @media (min-width: 1024px) {
    width: 60%;
    height: auto;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const ImgDiv = styled(Link)`
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    height: 100%;
    width: auto;
  }
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    const techList = getTechString(props.data.fields.tech);
    this.state = {
      display: false,
      show: false,
      projectActive: false,
      img: props.data.fields.img.fields,
      techs: techList,
    };
  }

  showContent() {
    this.setState({
      hover: hover,
      hide: true,
      projectActive: true,
    });
    this.time = setTimeout(() => {
      if (this.state.projectActive) {
        this.setState({
          hideStyle: true,
          showStyle: "display: block;",
        });

        this.time = setTimeout(() => {
          this.setState({ show: true });
        }, 50);
      }
    }, 400);
  }

  hideContent() {
    this.setState({
      hover: "",
      show: false,
      projectActive: false,
    });

    setTimeout(() => {
      if (!this.state.projectActive) {
        this.setState({
          hideStyle: false,
          showStyle: "display: none;",
        });

        setTimeout(() => {
          this.setState({ hide: false });
        }, 50);
      }
    }, 400);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <ProjectContainer
        onMouseEnter={() => this.showContent()}
        onMouseLeave={() => this.hideContent()}
        style={this.state.hover}
      >
        <StyledWrapper>
          <StyledH1 hide={this.state.hide} styling={this.state.hideStyle}>
            {this.props.data.fields.title}
          </StyledH1>
          <StyledP show={this.state.show} styling={this.state.showStyle}>
            {this.props.data.fields.pre_desc} <br /> TECH: {this.state.techs}
          </StyledP>
        </StyledWrapper>
        <ImgDiv
          to={`/project/${this.props.data.fields.title.toLowerCase()}`}
          state={{ data: this.props.data }}
        >
          <StyledImg
            src={this.state.img.file.url + "?w=500"}
            alt={this.state.img.description}
          />
        </ImgDiv>
      </ProjectContainer>
    );
  }
}

export default Project;
