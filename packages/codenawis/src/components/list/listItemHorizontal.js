import React from "react";
import { connect, styled } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import Article from "../utitlity/Article";
import CardTitle from "../utitlity/cardTitle";
import CardContent from "../utitlity/cardContent";
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
  const ListItemHorizontal = ({ state, item, imageHeight }) => {
  const author = state.source.author[item.author];
  // Get the data of the post.
  if(!imageHeight || imageHeight === "NaNpx"){
    imageHeight= "160px";
  }

  function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
  };

  return (
            <Article className="mb-2" height={imageHeight}>
                <Flex>
                  <div>
                  <HoverLink link={item.link}>
                    {state.theme.featured.showOnList && (
                      <FeaturedMedia height={imageHeight} width={imageHeight} id={item.featured_media} />
                    )}
                  </HoverLink>
                  </div>
                  <div>
                    <CardContent>
                          <HoverLink link={item.link}>
                            <CardTitle title={item.title.rendered} />
                          </HoverLink>
                          <small dangerouslySetInnerHTML={{ __html: truncate(item.excerpt.rendered, 100) }}></small>
                          {author && (
                            <Author authorId={item.author} />
                          )}
                          &nbsp;-&nbsp;
                          <PubDate post={item} />
                    </CardContent>
                  </div>
                </Flex>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItemHorizontal);

const Flex = styled.div`
  display: flex;
  flex-grow: 1;
`;