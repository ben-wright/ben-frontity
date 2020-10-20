import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { getBlock } from "../drawing/FlexibleContent";
import { Container } from "../styles/theme";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const contentBlocks = state.source[data.type][data.id].acf.content_blocks;

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
    <PostContainer>
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}
      {data.type === "post" && (
        <Container>
          <h1>{state.source[data.type][data.id].title.rendered}</h1>
        </Container>
      )}
      <Content>
        {contentBlocks.map((block, index) => {
          return (
            <div className={block.acf_fc_layout} key={index}>
              {getBlock(block, Html2React, state)}
            </div>
          );
        })}
      </Content>
    </PostContainer>
  ) : null;
};

export default connect(Post);

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */

const PostContainer = styled.div`
  min-height: 100%;
`;

const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
