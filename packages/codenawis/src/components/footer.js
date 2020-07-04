import React from "react";
import { connect} from "frontity";

const Footer = ({ state }) => {
  return (
    <>
      <div className="container py-5">
          <h3><b className="text-black"><span className="text-danger">NEWS</span>CHIN</b></h3>
        <hr className="bg-black" />
        <div className="d-flex flex-row justify-content-between">
          <p className="text-muted">{state.frontity.description}</p>
          <a href="https://github.com/mymakarim" target="_blank" rel="noopener noreferrer">with Love by @mymakarim @codenawis</a>
        </div>
      </div>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);
