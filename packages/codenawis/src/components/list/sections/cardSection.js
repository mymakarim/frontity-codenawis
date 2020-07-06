import React from 'react'
import Row from '../../utitlity/Row';
import ListItem from '../list-item';
import { connect } from "frontity";
import HoverLink from '../../utitlity/HoverLink';
import FlexBetween from '../../utitlity/FlexBetween';

const cardSection = ({state, postsCategory, category}) => {
    return (
        <>
          <HoverLink link={category.link}>
            <FlexBetween>
              <h3>{postsCategory.category.name}</h3>
              <span>See All</span>
            </FlexBetween>
          </HoverLink>
          <Row>
            {postsCategory.posts.map((post) => {
              const item = state.source['post'][post.id];
              return <ListItem key={item.id} item={item} />
            })}
          </Row>
        </>
    )
}

export default connect(cardSection)
