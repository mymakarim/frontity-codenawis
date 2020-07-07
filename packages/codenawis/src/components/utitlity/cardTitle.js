import React from "react";
import { styled, css } from "frontity";

const CardTitle = ({ title, margin="1rem 1.5rem" }) => {
  return (
    <TitleCss css={css`margin: ${margin}`} dangerouslySetInnerHTML={{ __html: title }} />
  );
};
export default CardTitle;

const TitleCss = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`;