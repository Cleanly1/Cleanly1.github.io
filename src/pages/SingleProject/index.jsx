import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { richTextToReact, fetchProjectsBySlug } from "../../utils/contentful";
import { Container, Box } from "../../components";
import { getTechString } from "../../utils/functions";
import { Bold, Text } from "../../utils/richtext"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

function SingleProject(){
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  let { slug } = useParams();
  useEffect(()=>{
    const fetchData = async () => {
      const entries = await fetchProjectsBySlug(slug)
      setData(entries.items[0].fields)
      setLoading(false);
    }

    if (data === undefined) {
      fetchData()
    }


  }, [setData, slug, data])
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

  if (loading) {
    return (<Container>
      <h1>loading...</h1>
    </Container>)
  }

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
