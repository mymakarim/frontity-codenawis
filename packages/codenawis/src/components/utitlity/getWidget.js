import React from 'react';
import { loadable } from "frontity";

const ListItem = loadable(() => import('../list/list-item'))
const ListItemHorizontal = loadable(() => import('../list/listItemHorizontal'))
const ListItemHorizontalSmall = loadable(() => import('../list/listItemHorizontalSmall'))
const ListItemOverlay = loadable(() => import('../list/listItemOverlay'))

const GetWidget = ({widget="listItem", item, imageHeight}) => {

    function getWidget(widget, item){
      switch (widget) {
        case "listItem":
          return <ListItem key={item.id} item={item} imageHeight={imageHeight} />
        case "listItemHorizontal":
          return <ListItemHorizontal key={item.id} item={item} imageHeight={imageHeight} />
        case "listItemHorizontalSmall":
          return <ListItemHorizontalSmall key={item.id} item={item} imageHeight={imageHeight} /> 
        case "listItemOverlay":
          return <ListItemOverlay imageHeight={imageHeight} key={item.id} item={item} /> 
        default:
          return <ListItem key={item.id} item={item} imageHeight={imageHeight} />
      }
    }
    return (
        <>
            { getWidget(widget, item) }
        </>
    )
}
export default GetWidget
