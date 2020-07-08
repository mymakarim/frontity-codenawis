import React from 'react'
import Row from '../../utitlity/Row';
import Col from '../../utitlity/Col';
import { connect } from "frontity";
import SectionTitle from './sectionTitles/sectionTitle';
import GetWidget from '../../utitlity/getWidget';

const Section444 = ({state, postsCategory, category, widget="listItem"}) => {
    
    return (
        <>
          <SectionTitle category={category} />
          <Row>
            {postsCategory.posts.map((post) => {
              const item = state.source['post'][post.id];
              return (
                <Col className="m3">
                  <GetWidget key={post.id} widget={widget} item={item} />
                </Col>
              )
            })}
          </Row>
        </>
    )
}

export default connect(Section444)
