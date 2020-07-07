import React from 'react'
import ListItem from '../list-item';
import ListItemHorizontal from '../listItemHorizontal';
import { connect } from "frontity";
import Col from '../../utitlity/Col';
import FlexBetween from '../../utitlity/FlexBetween';
import Row from '../../utitlity/Row';
import SectionTitle from './sectionTitles/sectionTitle';

const Section64 = ({state, postsCategory, category}) => {
    let contentOne = [];
    let contentRest = [];

    postsCategory.posts.map((post, index) => {
      const item = state.source['post'][post.id];
      return index === 0 
      ? contentOne.push(<ListItem imageHeight="290px" key={item.id} item={item} />)
      : contentRest.push(<ListItemHorizontal key={item.id} item={item} />)
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

export default connect(Section64)
