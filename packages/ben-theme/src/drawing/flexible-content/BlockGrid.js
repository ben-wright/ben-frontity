import React from "react";
import { styled } from "frontity";
import Link from "../../components/link";
import { Container } from "../../styles/theme";

const BlockGrid = ({ block, Html2React, state }) => {
  return (
    <GridBlock>
      <Container>
        <h2>{block.title}</h2>
        <GridContainer>
          {block.items.map((item, index) => {
            return (
              <GridItem key={index} style={{ backgroundColor: item.color }}>
                <Link link={item.page}>
                  <Content>
                    <Heading style={TextStyle}>{item.title}</Heading>
                    <SubHeading style={TextStyle}>{item.subtitle}</SubHeading>
                    <Paragraph style={TextStyle}>{item.description}</Paragraph>
                  </Content>
                </Link>
              </GridItem>
            );
          })}
        </GridContainer>
      </Container>
    </GridBlock>
  );
};

export default BlockGrid;

const GridBlock = styled.div``;

const GridContainer = styled.div`
  display: flex;
`;

const GridItem = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  @media only screen and (min-width: 768px) {
    .grid-item {
      width: 50%;
    }
  }

  @media only screen and (min-width: 992px) {
    .grid-item {
      width: 33.33%;
    }
  }
`;

const Content = styled.div`
  background-color: #1c1c1c21;
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin: 5px 0;
`;

const SubHeading = styled.h4`
  font-size: 2rem;
  font-weight: 300;
  margin: 5px 0;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.2rem;
`;

const TextStyle = {
  color: "white",
};
