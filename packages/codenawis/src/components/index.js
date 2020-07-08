import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Footer from './footer';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
  margin: 0;
  font-family: "Poppins", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #fefefe;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  
  .p-relative {
    position: relative;
  }
  .overlay {
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    z-index: 10;
    background: linear-gradient(to bottom, rgba(0,0,0,0) , rgba(0,0,0,.6));
    a {
      color: white;
    }
    h2 {
      margin: 0;
      margin-bottom: 10px;
    }
    small {
      color: #efefef;
    }
  }
`;

const HeadContainer = styled.div`
  background-color: black;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
