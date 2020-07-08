import React from "react";
import { connect } from "frontity";
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
                    <CardTitle title={item.title.rendered} />
                  </HoverLink>
                </div>
                <CardContent>
                    {/* If the post has an author, we render a clickable author text. */}
                    {author && (
                      <Author authorId={item.author} />
                    )}
                    &nbsp;-&nbsp;
                    <PubDate post={item} />
                </CardContent>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItem);