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

  const Html2React = libraries.html2react.Component;

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <PostListContainer>
      <Container>
        <div className="text_hero">
          <div>
            <div className="css-hawqlx-Container e1qbjiff0">
              <h1 className="css-6mm5vs-Title epkayte0">Blog</h1>
            </div>
          </div>
        </div>
        {data.items.map((data, index) => {
          const item = state.source["post"][data.id];
          console.log(item);
          return (
            <BlogItem href={item.link} key={index}>
              <div>
                <h2>{item.title.rendered}</h2>
                <Html2React html={item.excerpt.rendered} />
                <p>{item.date}</p>
              </div>
            </BlogItem>
          );
        })}
      </Container>
    </PostListContainer>
  ) : null;
};

const PostListContainer = styled.div`
  height: 90%;
`;

const BlogItem = styled.a`
  display: block;
  padding: 20px;
  margin: 32px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0 rgba(0, 0, 0, 0.15);
`;

export default connect(PostList);
