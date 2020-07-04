import React from "react";
import { connect } from "frontity";
import Container from './utitlity/Container';
import Hr from './utitlity/Hr';
import Logo from './utitlity/Logo';
import FlexBetween from './utitlity/FlexBetween';

const Footer = ({ state }) => {
  return (
    <>
      <Container>
          <Logo color="black" />
        <Hr />
        <FlexBetween>
          <span>{state.frontity.description}</span>
          <a href="https://github.com/mymakarim" target="_blank" rel="noopener noreferrer">with Love by @mymakarim @codenawis</a>
        </FlexBetween>
        <br/>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);