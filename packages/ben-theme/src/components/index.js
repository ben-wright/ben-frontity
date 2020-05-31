import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import externalCss from "../styles/style.css";
import Home from "./Home";

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
      <Global styles={css(externalCss)} />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Post when={data.isPostType} />
          <Home when={data.isHome} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");
  html {
    font-size: 12px;
  }
  body {
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #1c1c1c;
    margin: 0;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a,
  a:visited {
    color: #1c1c1c;
    text-decoration: none;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
