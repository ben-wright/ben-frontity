import React from "react";
import { styled } from "frontity";
import { Container } from "../../styles/theme";

const BlockRegularContent = ({ block, Html2React, state }) => {
  return (
    <BlockContainer className="block-regular-content">
      <Container>
        <ContainerChild>
          <Html2React html={block.content} />
        </ContainerChild>
      </Container>
    </BlockContainer>
  );
};

export default BlockRegularContent;

const BlockContainer = styled.div`
  margin: 25px 0;
`;

const ContainerChild = styled.div`
  width: 100%;
`;
