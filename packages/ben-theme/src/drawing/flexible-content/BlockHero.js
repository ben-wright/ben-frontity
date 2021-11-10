import React from "react";
import { styled } from "frontity";
import { WhiteButton } from "../../styles/theme";
import Image from "@frontity/components/image";
import {
  getImageSrcSet,
  getImageSizes,
  IMAGE_SLIDER_WP_SIZES,
  IMAGE_SLIDER_SIZES,
} from "../DrawResponsiveImage";

const BlockHero = ({ block, Html2React }) => {
  return (
    <BlockHeroContainer className="block-hero">
      <Filter />
      <StyledImage
        srcSet={getImageSrcSet(
          block.image,
          IMAGE_SLIDER_WP_SIZES,
          IMAGE_SLIDER_SIZES
        )}
        sizes={getImageSizes(
          block.image,
          IMAGE_SLIDER_WP_SIZES,
          IMAGE_SLIDER_SIZES
        )}
      />
      <Content>
        <InnerContent>
          <Html2React html={block.content} />
          <WhiteButton className="mailtoui" href={block.button_url}>{block.button_text}</WhiteButton>
        </InnerContent>
      </Content>
    </BlockHeroContainer>
  );
};

const BlockHeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Filter = styled.div`
  display: none;
  background: rgb(107, 8, 8);
  background: linear-gradient(
    90deg,
    rgba(107, 8, 8, 1) 10%,
    rgba(107, 8, 8, 0) 70%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const StyledImage = styled(Image)`
  @media only screen and (min-width: 768px) {
    height: 625px;
  }
`;

const Content = styled.div`
  position: relative;
  top: 10%;
  width: 100%;
  padding: 25px 50px;
  box-sizing: border-box;
  max-width: 1320px;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(107, 8, 8);
  order: -1;
  text-align: center;

  @media only screen and (max-width: 374px) {
    padding: 12px;
  }

  @media only screen and (min-width: 768px) {
    position: absolute;
    padding: 0 16px;
    background: none;
    text-align: left;
    top: 5%;
  }

  @media only screen and (min-width: 992px) {
    top: 10%;
  }
`;

const InnerContent = styled.div`
  width: 100%;
  margin: auto;
  @media only screen and (min-width: 768px) {
    width: 60%;
    margin: 0;
  }
`;

export default BlockHero;
