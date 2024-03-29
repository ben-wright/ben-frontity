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
import CircularFont from "../../assets/font.woff";

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
      <script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js"></script>
    </Main>
  );
};

export default connect(Theme);

const globalStyles = css`
@font-face {
    font-family: "Circular Std Book";
    src: url("${CircularFont}") format("truetype");
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
