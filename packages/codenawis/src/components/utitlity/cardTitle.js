import React from "react";
import { styled } from "frontity";

const CardTitle = ({ title }) => {
  return (
    <TitleCss dangerouslySetInnerHTML={{ __html: title }} />
  );
};
export default CardTitle;

const TitleCss = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`;