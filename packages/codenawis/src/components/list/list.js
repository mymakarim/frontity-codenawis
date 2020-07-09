import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
import Pagination from "./pagination";
import Container from '../utitlity/Container';
import Row from '../utitlity/Row';
import Col from '../utitlity/Col';
import Section444 from './sections/section444';
import Section6332 from './sections/section6332';
import {getPostsGroupedByCategory} from '../utitlity/js/functions';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategory(state.source);

  const homepageWidgets = [];
  
  const opinionWidgets = [
    {
      grid: "m6",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none"
    },
    {
      grid: "m6",
      name: "listItem",
      howmany: 2,
      flex: "row"
    },
    {
      grid: "m6",
      name: "listItemHorizontal",
      howmany: 2,
      flex: "column"
    },
    {
      grid: "m6",
      name: "listItem",
      howmany: 1,
      flex: "none",
      imageHeight: "180px",
    }
  ];

  const featuredWidgets = [
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "460px"
    },
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "460px"
    },
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "460px"
    },
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "460px"
    }
  ]

  const interviews = [
    {
      grid: "m12",
      name: "listItem",
      howmany: 3,
      flex: "row"
    }
  ];

  const newsWidgets = [
    {
      grid: "m12",
      name: "listItemHorizontal",
      howmany: 8,
      flex: "column"
    }
  ];

  const bookReviewWidgets = [
    {
      grid: "m12",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "300px"
    }
  ];

  const lettersWidgets = [
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "310px",
    },
    {
      grid: "m3",
      name: "listItemNoImage",
      howmany: 4,
      flex: "column"
    },
    {
      grid: "m3",
      name: "listItemOverlay",
      howmany: 1,
      flex: "none",
      imageHeight: "310px",
    },
    {
      grid: "m3",
      name: "listItemNoImage",
      howmany: 4,
      flex: "column"
    }
  ];
  
  const multimediaWidgets = [
    {
      grid: "m12",
      name: "listItemOverlay",
      howmany: 4,
      flex: "column",
      imageHeight: "250px"
    }
  ];

  const sections = [
    {
      grid: "m8",
      widget: newsWidgets,
      slug: "news"
    },
    {
      grid: "m4",
      widget: multimediaWidgets,
      "slug": "multimedia"
    }
  ];

  const populateHomepageWidgets = async ()=>{
    sections.map((section, index)=>{
      console.log("Section", index);
      let thePostsCategory = postsPerCategory.filter(function (postsCategory) {
        return postsCategory.category.slug === section.slug;
      });
      homepageWidgets.push(
        <Col className={section.grid}>
          <div className="box-shadow">
            <Col className="m12">
              {
                getWidget(thePostsCategory, section.widget)
              }
            </Col>
          </div>
        </Col>
      );

    })
  }

  const getWidget = (postsCategory, widget)=>{
    switch (postsCategory[0].category.slug) {
      case "featured":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "multimedia":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "news":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "exclusive-interviews":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "opinion":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "book-review":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      case "letters":
        return <Section6332 key={ postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} widgets={widget} />
      default:
        return <Section444 key={postsCategory[0].category.name} category={postsCategory[0].category} postsCategory={postsCategory[0]} />
    }
  }

  { data.route === '/' ?
    populateHomepageWidgets().then(()=>{
      console.log("POPULATED");
    }) : console.log("DONT POPULATE")
  }

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
          {data.route === '/' 
          ? <Row>
              { homepageWidgets }
            </Row>
          :<Row>
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return (
                <Col className="m3">
                  <ListItem key={item.id} item={item} />
                </Col>
              );
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
