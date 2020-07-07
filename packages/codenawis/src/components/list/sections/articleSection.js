import React from 'react'
import ListItem from '../list-item';
import { connect } from "frontity";
import HoverLink from '../../utitlity/HoverLink';
import FlexBetween from '../../utitlity/FlexBetween';
import Row from '../../utitlity/Row';
import Container from '../../utitlity/Container';

const ArticleSection = ({state, postsCategory, category}) => {
    return (
        <>
          <HoverLink link={category.link}>
            <FlexBetween>
              <h3>{postsCategory.category.name}</h3>
              <span>See All</span>
            </FlexBetween>
          </HoverLink>
            <Row>
            {postsCategory.posts.map((post, index) => {
              const item = state.source['post'][post.id];
              return <ListItem className={index < 1 ? "m6" : "m3"} key={item.id} item={item} />
            })}
          </Row>
        </>
    )
}

export default connect(ArticleSection)
