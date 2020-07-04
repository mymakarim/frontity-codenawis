import React from 'react';
import {css} from 'frontity';

const Logo = ({color}) => {
    return (
        <>
            <h2>
                <b css={css`color: ${color}`}><span css={css`color: #dc3545`}>CODE</span>NAWIS</b>
            </h2>
        </>
    )
}

export default Logo