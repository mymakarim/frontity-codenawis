import React from "react";
import { connect } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import Article from "../utitlity/Article";
import CardTitle from "../utitlity/cardTitle";
import CardContent from "../utitlity/cardContent";
import FeaturedMedia from "../featured-media";
import PubDate from '../meta/date';
import Author from '../meta/author';

const ListItemOverlay = ({ state, item, imageHeight }) => {
  const author = state.source.author[item.author];
  if(!imageHeight || imageHeight === "NaNpx"){
    imageHeight= "360px";
  }
  return (
            <Article height={imageHeight} className="mb-2 p-relative">
                <div>
                    {state.theme.featured.showOnList && (
                        <FeaturedMedia height={imageHeight} id={item.featured_media} />
                    )}
                </div>
                <HoverLink link={item.link}>
                    <div className="overlay">
                        <CardContent>
                            <CardTitle title={item.title.rendered} />
                            {author && (
                            <Author authorId={item.author} />
                            )}
                            &nbsp;-&nbsp;
                            <PubDate post={item} />
                        </CardContent>
                    </div>
                </HoverLink>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItemOverlay);