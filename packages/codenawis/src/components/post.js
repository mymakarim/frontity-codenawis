import React, { useEffect } from "react";
import { connect, styled, Head } from "frontity";
import List from "./list";
import Comments from "./comments";
import Tags from "./meta/tags";
import Author from "./meta/author";
import PubDate from "./meta/date";
import AuthorBox from "./meta/authorBox";
import Container from "./utitlity/Container";
import Avatar from "./utitlity/avatar";
import FlexBetween from "./utitlity/FlexBetween";
import FlexCenter from "./utitlity/FlexCenter";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  
  const url = state.frontity.url;

  // install frontity-share package (Developed by @mymakarim) 
  // use it from the libraries' fills
  const SharingButtons = libraries.fills.share.SharingButtons;

  // end share package as library
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
    <Head>
          <html lang="en" />
          <meta name="description" content={state.frontity.description} />
          
          <meta property="og:type" content="article" />
          <meta property="og:url" content={url + state.router.link} />
          <meta property="og:title" content={ post.title.rendered } />
          <meta property="og:description" content={ post.excerpt.rendered } />
          <meta property="og:image" content={state.source.attachment[post.featured_media]?.source_url} />

          <meta property="twitter:url" content={url + state.router.link} />
          <meta property="twitter:title" content={ post.title.rendered } />
          <meta property="twitter:description" content={ post.excerpt.rendered } />
          <meta property="twitter:image" content={state.source.attachment[post.featured_media]?.source_url} ></meta>
          <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <PostContainer>
      
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {/* Only display author and date on posts */}
        {data.isPost && (
          <MY2>
            <FlexBetween>
                {author && (
                  <FlexCenter>
                    <Avatar src={author.avatar_urls[96]} alt=""/>
                    <div>
                      <Author authorId={post.author} /><br />
                      <PubDate post={post} />
                    </div>
                  </FlexCenter>
                )}

                  {/** If there is a share package, show all the buttons **/}
                  {<SharingButtons />}

            </FlexBetween>
          </MY2>
        )}
        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <img src={state.source.attachment[post.featured_media]?.source_url} alt=""/>
        )}
      </PostContainer>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={post.content.rendered} />
        <br></br>
        <FlexBetween>
          <div>
            { post.tags && <Tags tags={post.tags} /> }
          </div>
          {/** If there is a share package, show all the buttons **/}
          {<SharingButtons />}


        </FlexBetween>
      </Content>
      {/* Author Box */}
      <MY2>
        {data.isPost && (
            <AuthorBox author={author} />
        )}
      </MY2>
      
      <br/>
      <br/>
      <Content>
        <Comments />
      </Content>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  ) : null;
};

export default connect(Post);

const PostContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
  p {
    line-height: 1.8;
  }  
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 18px;
  color: rgba(12, 17, 43);
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

const MY2 = styled.div`
  margin: 20px 0px;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: #dc3545;
    text-decoration: underline;
  }
  a:hover {
    transition: all .5s;
    color: black;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
