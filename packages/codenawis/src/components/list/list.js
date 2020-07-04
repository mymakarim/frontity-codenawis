import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

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

      {/* Iterate over the items of the list. */}
      <div>
        <br/>
        <Row>
          {data.items.map(({ type, id }, index) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <ListItem key={item.id} item={item} />
          })}
        </Row>
      </div>
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
const Bold = styled.b`
  font-weight: 700;
`;
const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-right:-15px;
  margin-left:-15px
`;
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top:40px;
  padding-bottom:40px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px){
    max-width: 720px;
  }
  @media (min-width: 992px){
    max-width: 960px;
  }
  @media (min-width: 1200px){
     max-width: 1140px;
  }
`;