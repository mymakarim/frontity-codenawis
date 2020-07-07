import React from 'react'
import ListItem from '../list-item';
import { connect } from "frontity";
import HoverLink from '../../utitlity/HoverLink';
import FlexBetween from '../../utitlity/FlexBetween';

const ArticleSection = ({state, postsCategory, category}) => {
    return (
        <>
          <HoverLink link={category.link}>
            <FlexBetween>
              <h3>{postsCategory.category.name} - Article</h3>
              <span>See All</span>
            </FlexBetween>
          </HoverLink>
            {postsCategory.posts.map((post, index) => {
              const item = state.source['post'][post.id];
              return index < 2 ? <ListItem key={item.id} item={item} /> : null
            })}
        </>
    )
}

export default connect(ArticleSection)
