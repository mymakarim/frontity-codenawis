import React from 'react'
import ListItem from '../list-item';
import { connect } from "frontity";
import Col from '../../utitlity/Col';
import Row from '../../utitlity/Row';
import SectionTitle from './sectionTitles/sectionTitle';

const Section633 = ({state, postsCategory, category}) => {
    return (
        <>
          <SectionTitle category={category} />
            <Row>
            {postsCategory.posts.map((post, index) => {
              const item = state.source['post'][post.id];
              return <Col className={index < 1 ? "m6" : "m3"}><ListItem key={item.id} item={item} /></Col>
            })}
          </Row>
        </>
    )
}

export default connect(Section633)
