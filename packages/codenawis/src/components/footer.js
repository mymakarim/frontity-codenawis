import React from "react";
import { connect, styled } from "frontity";
import Container from './utitlity/Container';
import Hr from './utitlity/Hr';
import Logo from './utitlity/Logo';

const Footer = ({ state }) => {
  return (
    <>
      <Container>
          <Logo color="black" />
        <Hr />
        <FlexBetween>
          <Muted>{state.frontity.description}</Muted>
          <a href="https://github.com/mymakarim" target="_blank" rel="noopener noreferrer">with Love by @mymakarim @codenawis</a>
        </FlexBetween>
        <br/>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Muted = styled.span`
  color: #bbb;
`;

const FlexBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 570px){
    flex-direction: column !important;
  }
`;
