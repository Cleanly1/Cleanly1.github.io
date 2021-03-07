import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 80%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1px;
  transition: all ease 0.5s;
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
