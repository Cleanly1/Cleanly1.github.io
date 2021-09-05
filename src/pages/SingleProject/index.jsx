import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { richTextToReact, fetchProjectsBySlug } from "../../utils/contentful";
import { Container, Box } from "../../components";
import { getTechString } from "../../utils/functions";
import { Bold, Text, Hyper } from "../../utils/richtext"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const StyledImg = styled.img`
  margin: 1rem 0;
  max-height: 20rem;
  max-width: 100%;

  @media (min-width: 1024px) {
    height: 100%;
    max-width: inherit;
  }
`;

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
      [MARKS.BOLD]: (text) => <Bold>{ text }</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{ children }</Text>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Hyper node={node}>{ children }</Hyper>
      ),
    },

    // renderText: (text) => text.replace(".", "?"),
  };

  if (loading) {
    return (
    <Container>
      <h1>Loading...</h1>
    </Container>)
  }

  return (
    <Container>
      <Box>
        <h1>{data.title}</h1>
      </Box>

      <StyledImg
        src={data.img.fields.file.url + "?w=800"}
        alt={data.img.fields.file.description}
      />

      <Box>
        <div>{richTextToReact(data.desc, options)}</div>
      </Box>
      <Box>Tech: {getTechString(data.tech)}</Box>
    </Container>
  );
}

export default SingleProject;
