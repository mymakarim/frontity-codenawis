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
  const ListItemHorizontal = ({ state, item }) => {
  const author = state.source.author[item.author];
  // Get the data of the post.

  return (
            <Article className="mb-2" height="135px">
                <Flex>
                  <div>
                  <HoverLink link={item.link}>
                    {state.theme.featured.showOnList && (
                      <FeaturedMedia height="135px" width="200px" id={item.featured_media} />
                    )}
                  </HoverLink>
                  </div>
                  <div>
                    <div>
                      <HoverLink link={item.link}>
                        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                      </HoverLink>
                    </div>
                    <Meta>
                      {author && (
                        <Author authorId={item.author} />
                      )}
                      &nbsp;&nbsp;
                      <PubDate post={item} />
                    </Meta>
                  </div>
                </Flex>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItemHorizontal);

const Flex = styled.div`
  display: flex;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 1rem 1.5rem;
`;
const Meta = styled.div`
  margin:0 1.5rem;
  padding-bottom: 1.5rem;
`;