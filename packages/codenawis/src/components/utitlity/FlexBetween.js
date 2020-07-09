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
  align-items: start;
  gap: 20px;
  &.column {
    flex-direction: column;
  }
  &.row {
    > div:not(:last-child) {
      margin-right: 30px;
    }
  }
  @media (max-width: 570px){
    &.row {
      flex-direction: column;
      > div:not(:last-child) {
        margin-right: 0;
      }
    }
  }
`;
