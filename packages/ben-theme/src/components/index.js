import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import externalCss from "../styles/style.css";
import PostList from "./post-list";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <Main>
      <Title />

      <Global styles={globalStyles} />
      <Global styles={css(externalCss)} />

      <Header />

      <Switch>
        <Loading when={data.isFetching} />
        <PostList when={state.source.postsPage === data.link} />
        <Post when={data.isPostType} />
        <PageError when={data.isError} />
      </Switch>

      <Footer />
    </Main>
  );
};

export default connect(Theme);

const globalStyles = css`
@font-face {font-family: "Circular Std Book";
    src: url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.svg#Circular Std Book") format("svg"); /* iOS 4.1- */
}
  html {
    font-size: 12px;
  }
  body {
    height: 100%;
    font-family: "Circular Std Book", sans-serif;
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
  height: 90%;
`;
