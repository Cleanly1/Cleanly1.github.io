import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: white;
  color: black;
  border-radius: 2px;
  padding: 5px 10px;
  text-decoration: none;
`;

function NavButton(props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}

export default NavButton;
