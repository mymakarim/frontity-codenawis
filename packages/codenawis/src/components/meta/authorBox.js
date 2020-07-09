import React from 'react'
import Link from '../link';
import { styled } from 'frontity';
import FlexCenter from '../utitlity/FlexCenter';
import Avatar from '../utitlity/avatar';
import Author from '../meta/author';

const authorBox = ({author}) => {
    return (
        <>
            <AuthorBoxCss>
                <FlexCenter>
                  <Link link={author?.link}>
                    <Avatar src={author?.avatar_urls[96]} alt=""/>
                  </Link>
                  <div>
                    <Author authorId={author?.id} />
                    <p>{author?.description}</p>
                    <a href={author?.url} target="_blank" >{author?.url}</a>
                  </div>
                </FlexCenter>
            </AuthorBoxCss>   
        </>
    )
}


const AuthorBoxCss = styled.div`
  margin: 30px 0px;
  border: 1px solid #eee;
  padding: 40px 70px;
  img {
    width: 180px !important;
    margin-right: 20px;
  }
  a {
    color: #dc3545;
  }
  a: hover {
    transition: all .5s;
    color: black;
  }
  @media(max-width: 570px){
    img {
      width: 70px !important;
    }
    padding: 20px;
  }
`;

export default authorBox
