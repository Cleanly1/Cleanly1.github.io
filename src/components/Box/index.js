import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: calc(100% - 4rem);
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  border-top: 4px solid black;
  border-bottom: 4px solid black;
`;

const Box = (props) => {
  return (
    <StyledDiv
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </StyledDiv>
  );
};

export default Box;
