import React from 'react'
import Link from '../link';
import { styled } from 'frontity';

const HoverLink = ({children, link}) => {
    return (
        <HoverLinkCss>
            <Link link={link}>
                {children}
            </Link>
        </HoverLinkCss>
    )
}

const HoverLinkCss = styled(Link)`
  a, a:visted {
    color: black !important;
  }
  :hover {
    transition: all .5s;
    color: #dc3545 !important;
    text-decoration: none;
  }
`;

export default HoverLink
