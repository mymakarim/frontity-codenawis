import React from "react";
import HoverLink from "../../../utitlity/HoverLink";
import {styled} from 'frontity';

const SectionTitle = ({ category }) => {
  return (
    <HoverLink link={category.link}>
        <FlexBetween>
            <h3><svg xmlns="http://www.w3.org/2000/svg" fill="#dc3545" width="13" height="13" viewBox="0.5 0 12 12">
             		<path d="M0.632,5.914L6.481,11.7l5.848-5.788L6.481,0.126Zm5.849,1.9-1.916-1.9,1.916-1.9L8.4,5.914Z"></path>
             	</svg> {category.name}</h3>
            <span>See All</span>
        </FlexBetween>
    </HoverLink>
  );
};

const FlexBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default SectionTitle