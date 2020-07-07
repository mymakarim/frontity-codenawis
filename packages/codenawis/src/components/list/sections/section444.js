import React from 'react'
import Row from '../../utitlity/Row';
import Col from '../../utitlity/Col';
import ListItem from '../list-item';
import { connect } from "frontity";
import SectionTitle from './sectionTitles/sectionTitle';

const Section444 = ({state, postsCategory, category}) => {
    return (
        <>
          <SectionTitle category={category} />
          <Row>
            {postsCategory.posts.map((post) => {
              const item = state.source['post'][post.id];
              return <Col className="m4"><ListItem key={item.id} item={item} /></Col>
            })}
          </Row>
        </>
    )
}

export default connect(Section444)
