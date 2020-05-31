import React from "react";
import { styled } from "frontity";
import { Container } from "../../styles/theme";

const BlockTextHero = ({ block, Html2React }) => {
  return (
    <div>
      <Container>
        <Title>{block.title}</Title>
        <SubTitle>{block.subtitle}</SubTitle>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 200;
  margin: 20px 0;
`;

const SubTitle = styled.h2`
  font-size: 2.3rem;
`;

export default BlockTextHero;
