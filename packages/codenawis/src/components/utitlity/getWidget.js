import React from 'react';
import { loadable } from "frontity";

const ListItem = loadable(() => import('../list/list-item'))
const ListItemHorizontal = loadable(() => import('../list/listItemHorizontal'))
const ListItemHorizontalSmall = loadable(() => import('../list/listItemHorizontalSmall'))

const GetWidget = ({widget="listItem", item}) => {

    function getWidget(widget, item){
      switch (widget) {
        case "listItem":
          return <ListItem key={item.id} item={item} />
        case "listItemHorizontal":
          return <ListItemHorizontal key={item.id} item={item} />
        case "listItemHorizontalSmall":
          return <ListItemHorizontalSmall key={item.id} item={item} /> 
        default:
          return <ListItem key={item.id} item={item} />
      }
    }
    return (
        <>
            { getWidget(widget, item) }
        </>
    )
}
export default GetWidget
