import React from 'react'
import { connect } from "frontity";
import Col from '../../utitlity/Col';
import Row from '../../utitlity/Row';
import SectionTitle from './sectionTitles/sectionTitle';
import GetWidget from '../../utitlity/getWidget';

const Section633 = ({state, postsCategory, category, widget="listItem"}) => {
    return (
        <>
          <SectionTitle category={category} />
            <Row>
            {postsCategory.posts.map((post, index) => {
              const item = state.source['post'][post.id];
              return (
                <Col className={index < 1 ? "m6" : "m3"}>
                  <GetWidget key={post.id} widget={widget} item={item} />
                </Col>
              )
            })}
          </Row>
        </>
    )
}

export default connect(Section633)
