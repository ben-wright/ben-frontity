import React from "react";
import { Container } from "../../styles/theme";
import { styled } from "frontity";
import {
  getImageSrcSet,
  getImageSizes,
  IMAGE_STD_WP_SIZES,
  IMAGE_STD_SIZES,
} from "../DrawResponsiveImage";
import Image from "@frontity/components/image";

const BlockHalfHalf = ({ block, Html2React, state }) => {
  return (
    <BlockContainer className="block-half-half">
      <InnerContainer>
        <ContainerChild imagePos={block.image_position}>
          <Image
            srcSet={getImageSrcSet(
              block.image,
              IMAGE_STD_WP_SIZES,
              IMAGE_STD_SIZES
            )}
            sizes={getImageSizes(
              block.image,
              IMAGE_STD_WP_SIZES,
              IMAGE_STD_SIZES
            )}
          />
        </ContainerChild>
        <ContainerChild>
          <Html2React html={block.content} />
        </ContainerChild>
      </InnerContainer>
    </BlockContainer>
  );
};

export default BlockHalfHalf;

const BlockContainer = styled.div`
  margin: 100px 0;
`;

const ContainerChild = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  img {
    border-radius: 10px;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: 20px;
    order: ${(block) =>
      block.imagePos === "left"
        ? "-1"
        : block.imagePos === "right"
        ? "2"
        : "unset"};
  }
`;

const InnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
