import React from "react";
import { richTextToReact } from "../../utils/contentful";
import { Container, Box } from "../../components";
import { getTechString } from "../../utils/functions";
import { Bold, Text } from "../../utils/richtext"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

function SingleProject({ location, id }) {
  const data = location.state.data.fields;


  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },

    // renderText: (text) => text.replace(".", "?"),
  };


  return (
    <Container>
      <Box>
        <h1>The Project</h1>
      </Box>
      <Box>
        <h1>{data.title}</h1>
        <div>{richTextToReact(data.desc, options)}</div>
      </Box>
      <Box>Tech: {getTechString(data.tech)}</Box>
    </Container>
  );
}

export default SingleProject;
