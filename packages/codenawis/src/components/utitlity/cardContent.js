import React from 'react'
import {styled} from 'frontity';

const cardContent = ({children}) => {
    return (
        <ContentCss>
            {children}
        </ContentCss>
    )
}

const ContentCss = styled.div`
  margin:0 1.5rem;
  padding-bottom: 1.5rem;
`;

export default cardContent
