import React from 'react'
import { connect } from "frontity";
import Col from '../../utitlity/Col';
import FlexBetween from '../../utitlity/FlexBetween';
import Row from '../../utitlity/Row';
import SectionTitle from './sectionTitles/sectionTitle';
import GetWidget from '../../utitlity/getWidget';

const Section66 = ({state, postsCategory, category, widgetLeft="listItem", widgetRight="listItem"}) => {
    let contentOne = [];
    let contentRest = [];

    postsCategory.posts.map((post, index) => {
      const item = state.source['post'][post.id];
      return index === 0 
      ? contentOne.push(<GetWidget key={post.id} widget={widgetLeft} item={item} />)
      : contentRest.push(<GetWidget key={post.id} widget={widgetRight} item={item} />)
    });

    return (
        <>
          <SectionTitle category={category} />
          <Row>
            <Col className="m6">
              { contentOne }
            </Col>
            <Col className="m6">
                <FlexBetween direction="column">
                  { contentRest }
                </FlexBetween>
            </Col>
          </Row>
        </>
    )
}

export default connect(Section66)
