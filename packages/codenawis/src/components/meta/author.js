import React from "react";
import { connect } from "frontity";
import HoverLink from "../utitlity/HoverLink";

const Author = ({ state, authorId }) => {
  const author = state.source.author[authorId];

  return (
    <small>
      <HoverLink link={author.link}>
        <b>{author.name}</b>
      </HoverLink>
    </small>
  );
};

export default connect(Author);