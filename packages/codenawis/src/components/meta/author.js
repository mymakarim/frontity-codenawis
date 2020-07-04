import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Author = ({ state, authorId }) => {
  const author = state.source.author[authorId];

  return (
    <Wrapper>
        {"by "}
      <Link link={author.link}>{author.name}</Link>
    </Wrapper>
  );
};

export default connect(Author);

const Wrapper = styled.span`
  display: inline;
  & a {
    color: currentColor;
    font-size: 1rem;
    font-weight: 600;
  }
  & a:hover {
    transition: all .5s;
    color: #dc3545;
  }
`;