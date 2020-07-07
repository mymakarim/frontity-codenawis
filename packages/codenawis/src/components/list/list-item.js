import React from "react";
import { connect, styled } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import Article from "../utitlity/Article";
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
  const ListItem = ({ state, item, imageHeight }) => {
  const author = state.source.author[item.author];
  // Get the data of the post.

  return (
            <Article height={(parseInt(imageHeight) + 160) + "px"} className="mb-2">
                <div>
                  <HoverLink link={item.link}>
                  {state.theme.featured.showOnList && (
                    <FeaturedMedia height={imageHeight} id={item.featured_media} />
                  )}
                    <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                  </HoverLink>
                </div>
                <Meta>
                    {/* If the post has an author, we render a clickable author text. */}
                    {author && (
                      <Author authorId={item.author} />
                    )}
                    &nbsp;&nbsp;
                    <PubDate post={item} />
                </Meta>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItem);

const Title = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 1rem 1.5rem;
`;
const Meta = styled.div`
  margin:0 1.5rem;
  padding-bottom: 1.5rem;
`;