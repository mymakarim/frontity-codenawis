import React from 'react'
import {styled} from 'frontity';

const FlexBetween = ({children, direction="row"}) => {
    return (
        <FlexBetweenCss className={direction}>
            {children}
        </FlexBetweenCss>
    )
}

export default FlexBetween

const FlexBetweenCss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.column {
    flex-direction: column;
  }
`;
