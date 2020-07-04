import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <div className="container pt-4 pt-md-5 ">
        <Link link="/">
          <h3><b className="text-white"><span className="text-danger">NEWS</span>CHIN</b></h3>
        </Link>
        <hr className="bg-white" />
        {/* <p className="text-muted">{state.frontity.description}</p> */}
        <MobileMenu />
      </div>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
