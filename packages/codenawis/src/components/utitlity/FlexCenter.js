import React from 'react'
import {styled} from 'frontity';

const FlexCenter = ({children}) => {
    return (
        <FlexCenterCss>
            {children}
        </FlexCenterCss>
    )
}

export default FlexCenter

const FlexCenterCss = styled.div`
  display: flex;
  align-items: center;
`;
