import React from "react";
import { styled } from "frontity";
import Link from "../../components/link";
import { Container } from "../../styles/theme";
import Image from "@frontity/components/image";
import {
  getImageSrcSet,
  getImageSizes,
  IMAGE_STD_WP_SIZES,
  IMAGE_STD_SIZES,
} from "../DrawResponsiveImage";

const BlockWork = ({ block, Html2React, state }) => {
  return (
    <GridBlock>
      <Container>
        <h2>{block.title}</h2>
        <GridContainer>
          {block.work_items.map((item, index) => {
            return (
              <Link link={item.page.url} key={index}>
                <GridItem key={index} style={{ backgroundColor: item.color }}>
                  <GridItemCon>
                    <Content>
                      <Heading style={TextStyle}>{item.title}</Heading>
                      <SubHeading style={TextStyle}>{item.subtitle}</SubHeading>
                    </Content>
                    <ImageArea>
                      <Image
                        srcSet={getImageSrcSet(
                          item.image,
                          IMAGE_STD_WP_SIZES,
                          IMAGE_STD_SIZES
                        )}
                        sizes={getImageSizes(
                          item.image,
                          IMAGE_STD_WP_SIZES,
                          IMAGE_STD_SIZES
                        )}
                      />
                    </ImageArea>
                  </GridItemCon>
                </GridItem>
              </Link>
            );
          })}
        </GridContainer>
      </Container>
    </GridBlock>
  );
};

export default BlockWork;

const GridBlock = styled.div``;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    width: 50%;
  }
`;

const ImageArea = styled.div`
  max-width: 400px;
`;

const GridItemCon = styled.div``;

const GridItem = styled.div`
  box-sizing: border-box;
  width: 90%;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  flex-wrap: wrap;

  a {
    display: flex;
  }

  @media only screen and (min-width: 768px) {
    margin: 20px 0px;
    padding: 20px;
    border-radius: 20px;
    .grid-item {
      width: 100%;
    }
  }

  @media only screen and (min-width: 992px) {
    .grid-item {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
