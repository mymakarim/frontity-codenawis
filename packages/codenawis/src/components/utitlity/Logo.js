import React from 'react';
import {css} from 'frontity';

const Logo = ({color}) => {
    return (
        <>
            <h3><b css={css`color: ${color}`}><span css={css`color: #dc3545`}>NEWS</span>CHIN</b></h3>
        </>
    )
}

export default Logo
