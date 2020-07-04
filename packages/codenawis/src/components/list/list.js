import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <div className="container py-5">
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b className="font-weight-bold">{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b className="font-weight-bold">{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      <div className="my-5">
        <div className="row">
          {data.items.map(({ type, id }, index) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <ListItem key={item.id} item={item} />
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
