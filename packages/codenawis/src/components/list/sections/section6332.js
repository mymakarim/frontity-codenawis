import React from 'react'
import { connect } from "frontity";
import Col from '../../utitlity/Col';
import FlexBetween from '../../utitlity/FlexBetween';
import Row from '../../utitlity/Row';
import SectionTitle from './sectionTitles/sectionTitle';
import GetWidget from '../../utitlity/getWidget';

const Section6332 = ({state, postsCategory, category, widgets}) => {
    let widgetNames = [];
    let widgetHeights = [];

    let widgetContent = [];
    let widgetContentCategorized = [];

    let widgetFinal = [];

    widgets.map((widget)=>{
      let i = 0;
      while (i < widget.howmany) {
        widgetNames.push(widget.name);
        widgetHeights.push(widget.imageHeight);
        i++;
      }
      widgetContentCategorized.push([]);
    });

    // console.log("widgetObj", widgets);

    postsCategory.posts.map((post, index) => {
      const item = state.source['post'][post.id];
      return widgetContent.push(<GetWidget key={post.id} imageHeight={widgetHeights[index]} widget={widgetNames[index]} item={item} />)
    });

    // console.log("WidgetContent", widgetContent);
    // console.log("WidgetContentCategorized", widgetContentCategorized);

    let myIndex = 0;
    widgets.map((widget, index)=>{
      let i = 0;
      while (i < widget.howmany) {
        widgetContentCategorized[index].push(widgetContent[myIndex]);
        i++;
        myIndex++;
      }
    });

    // console.log("WidgetContentCategorized", widgetContentCategorized);




widgets.map((widget, index)=>{
  
    if(widget.flex === "none"){
        widgetFinal.push(
          <Col className={widget.grid}>
            { widgetContentCategorized[index] }
          </Col>
        );
    }else{
      widgetFinal.push(
        <Col className={widget.grid}>
          <FlexBetween direction={widget.flex}>
            {widgetContentCategorized[index]}
          </FlexBetween>
        </Col>
      );
    }
});

// console.log("WidgetFinal", widgetFinal);

    return (
        <>
          <SectionTitle category={category} />
          <Row>
            { widgetFinal }
          </Row>
        </>
    )
}

export default connect(Section6332)
