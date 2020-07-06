import React from "react";
import { connect } from "frontity";
import HoverLink from "../utitlity/HoverLink";

const Author = ({ state, authorId }) => {
  const author = state.source.author[authorId];

  return (
    <span>
      <HoverLink link={author.link}>
        <b>{author.name}</b>
      </HoverLink>
    </span>
  );
};

export default connect(Author);