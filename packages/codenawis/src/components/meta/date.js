import React from "react";
import { connect, styled } from "frontity";

const PubDate = ({ state, post }) => {
  const date = new Date(post.date);

  return (
    <Wrapper>
        {" on "}
      <span>{date.toDateString()}</span>
    </Wrapper>
  );
};

export default connect(PubDate);

const Wrapper = styled.span`
  display: inline;
  & span {
    font-weight: 600;
    font-size: 1rem;
  }
`;