import React from "react";
import { connect} from "frontity";

const Footer = ({ state }) => {
  return (
    <>
      <div className="container py-5">
          <h3><b className="text-black"><span className="text-danger">NEWS</span>CHIN</b></h3>
        <hr className="bg-black" />
        <p className="text-muted">{state.frontity.description}</p>
      </div>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);
