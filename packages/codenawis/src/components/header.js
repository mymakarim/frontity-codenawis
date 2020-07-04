import React from "react";
import { connect, css } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Container from './utitlity/Container'
import Hr from './utitlity/Hr'
import Logo from './utitlity/Logo'
import FlexBetween from './utitlity/FlexBetween';
import SearchForm from './SearchForm';

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <FlexBetween>
          <Link link="/">
            <Logo color="white" />
          </Link>
          <SearchForm />
        </FlexBetween>
        <Hr />
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);