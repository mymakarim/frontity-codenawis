import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const PubDate = ({ state, post }) => {
  const date = new Date(post.date);

  return (
    <Wrapper>
        {" on "}
      <Link link={post.link}>{date.toDateString()}</Link>
    </Wrapper>
  );
};

export default connect(PubDate);

const Wrapper = styled.span`
  display: inline;
  & a {
    font-weight: 600;
    font-size: 1rem;
  }
`;