import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
import Pagination from "./pagination";
import Container from '../utitlity/Container';
import Row from '../utitlity/Row';
import Section444 from './sections/section444';
import Section6332 from './sections/section6332';
import {getPostsGroupedByCategory} from '../utitlity/js/functions';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategory(state.source);
  
  const newsWidgets = [
    {
      grid: "m3",
      name: "listItem",
      howmany: 1,
      flex: "none"
    },
    {
      grid: "m6",
      name: "listItemHorizontal",
      howmany: 2,
      flex: "column"
    },
    {
      grid: "m3",
      name: "listItem",
      howmany: 1,
      flex: "none"
    }
  ];

  const featuredWidgets = [
    {
      grid: "m6",
      name: "listItem",
      howmany: 1,
      flex: "none"
    },
    {
      grid: "m6",
      name: "listItemHorizontal",
      howmany: 2,
      flex: "column"
    }
  ];

  const multimediaWidgets = [
    {
      grid: "m6",
      name: "listItem",
      howmany: 1,
      flex: "none"
    },
    {
      grid: "m3",
      name: "listItem",
      howmany: 1,
      flex: "none"
    },
    {
      grid: "m3",
      name: "listItem",
      howmany: 1,
      flex: "none"
    }
  ];
  

  return (
    <Container>

      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <Bold>{decode(state.source[data.taxonomy][data.id].name)}</Bold>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <Bold>{decode(state.source.author[data.id].name)}</Bold>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isSearch && (
        <Header>
          Search Results For: <Bold>{data.searchQuery}</Bold>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      <div>
        <br/>
          {data.route === '/' 
          ? postsPerCategory.map((postsCategory, index) => {
              if(postsCategory.category){
                switch (postsCategory.category.slug) {
                  case "featured":
                    return <Section6332 key={ postsCategory.category.name} category={postsCategory.category} postsCategory={postsCategory} widgets={featuredWidgets} />
                  case "multimedia":
                    return <Section6332 key={ postsCategory.category.name} category={postsCategory.category} postsCategory={postsCategory} widgets={multimediaWidgets} />
                  case "news":
                    return <Section6332 key={ postsCategory.category.name} category={postsCategory.category} postsCategory={postsCategory} widgets={newsWidgets} />
                  default:
                    return <Section444 key={postsCategory.category.name} category={postsCategory.category} postsCategory={postsCategory} />
                }
              }else{
                return <span key={index}></span>;
              }
          })
          :<Row>
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return <ListItem className="m4" key={item.id} item={item} />
            })} 
          </Row>
          }
      </div>
      {data.route === '/' ? null : <Pagination /> }
    </Container>
  );
};

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
  font-size: 1.6rem;
`;
const Bold = styled.b`
  font-weight: 700;
`;
