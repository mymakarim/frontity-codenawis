import React from 'react'
import {styled} from 'frontity';

const FlexBetween = ({children}) => {
    return (
        <FlexBetweenCss>
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
  @media(max-width: 570px){
    flex-direction: column !important;
  }
`;
