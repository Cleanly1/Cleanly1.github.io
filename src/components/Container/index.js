import React from "react";
import styled from "styled-components";
import Clock from "../Clock";
import Navbar from "../Navbar";

const ContainerDiv = styled.div`
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  color: whitesmoke;
  background-color: #292929;
  font-family: "Roboto Mono", monospace;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  padding-top: 10vh;
  width: 100%;
`;

function Container({ children }) {
  return (
    <ContainerDiv>
      <Navbar />
      <StyledWrapper>{children}</StyledWrapper>
      <Clock />
    </ContainerDiv>
  );
}

export default Container;
