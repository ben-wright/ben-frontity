import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container } from "../styles/theme";

const PostList = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <h1>Post list</h1>
    </Container>
  ) : null;
};

export default connect(PostList);
