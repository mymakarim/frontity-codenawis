import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const ItemRow = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
        <div className="col-md-4">
            <Article className=" mb-5 bg-white rounded">
                
                <HoverLink link={item.link}>
                    <img className="w-100" src={state.source.attachment[item.featured_media].source_url} alt=""/>
                    <h2 className="h6 mx-4 pt-3" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                </HoverLink>

                <div>
                    {/* If the post has an author, we render a clickable author text. */}
                    {author && (
                    <HoverLink link={author.link}>
                        <AuthorName className="ml-4">
                        By <b>{author.name}</b>
                        </AuthorName>
                    </HoverLink>
                    )}
                    <PublishDate>
                    {" "}
                    on <b>{date.toDateString()}</b>
                    </PublishDate>
                </div>
            </Article>
        </div>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ItemRow);

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const HoverLink = styled(Link)`
  :hover {
    transition: all .5s;
    color: #dc3545 !important;
  }
`;


const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Article = styled.div`
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  max-width:750px;
  margin:0 auto;
  height:320px;
`;
