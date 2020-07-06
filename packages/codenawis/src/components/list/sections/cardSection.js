import React from 'react'
import Row from '../../utitlity/Row';
import ListItem from '../list-item';
import { connect, css } from "frontity";
import HoverLink from '../../utitlity/HoverLink';

const cardSection = ({state, postsCategory, category}) => {
    return (
        <>
          <HoverLink link={category.link}>
            <div css={css`display: flex; justify-content: space-between; align-items: center;`} >
              <h3>{postsCategory.category.name}</h3>
              <span>See All</span>
            </div>
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
