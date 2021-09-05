import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: white;
`;

export const Bold = ({ children }) => <em class="bold">{children}</em>;

export const Text = ({ children }) => <p>{children}</p>;

export const Hyper = ({ node, children }) => (
  <Link href={node.data.uri} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
