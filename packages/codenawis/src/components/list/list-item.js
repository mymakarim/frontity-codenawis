import React from "react";
import { connect, styled } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import FeaturedMedia from "../featured-media";
import PubDate from '../meta/date';
import Author from '../meta/author';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const ListItem = ({ state, item, className='' }) => {
  const author = state.source.author[item.author];
  // Get the data of the post.

  return (
        <Col className={className}>
            <Article>
                <HoverLink link={item.link}>
                {state.theme.featured.showOnList && (
                  <FeaturedMedia id={item.featured_media} />
                )}
                    <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                </HoverLink>

                <Meta>
                    {/* If the post has an author, we render a clickable author text. */}
                    {author && (
                      <Author authorId={item.author} />
                    )}
                    <PubDate post={item} />
                </Meta>
            </Article>
        </Col>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItem);

const Article = styled.div`
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  margin:0 auto;
  height:350px;
  background-color: white;
  margin-bottom: 40px;
  border-radius: 5px;
  font-family: "Poppins", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  
  @media (min-width: 768px){
    &.m4 {
      flex: 0 0 33.333333%;
      max-width: 30.333333%;
    }
    &.M6 {
      flex: 0 0 49.5%;
      max-width: 49.5%;
    }
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.1rem;
  margin: 1rem 1.5rem;
`;
const Meta = styled.div`
  margin:0 1.5rem;
`;