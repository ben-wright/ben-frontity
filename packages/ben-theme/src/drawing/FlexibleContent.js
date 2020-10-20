import React from "react";
import BlockHero from "./flexible-content/BlockHero";
import BlockTextHero from "./flexible-content/BlockTextHero";
import BlockHalfHalf from "./flexible-content/BlockHalfHalf";
import BlockSkills from "./flexible-content/BlockSkills";
import BlockGrid from "./flexible-content/BlockGrid";
import BlockWork from "./flexible-content/BlockWork";
import BlockRegularContent from "./flexible-content/BlockRegularContent";

const getBlock = (block, Html2React, state) => {
  switch (block.acf_fc_layout) {
    case "half_half":
      return (
        <BlockHalfHalf block={block} Html2React={Html2React} state={state} />
      );
    case "hero":
      return <BlockHero block={block} Html2React={Html2React} />;
    case "text_hero":
      return <BlockTextHero block={block} Html2React={Html2React} />;
    case "skills":
      return <BlockSkills block={block} Html2React={Html2React} />;
    case "grid":
      return <BlockGrid block={block} Html2React={Html2React} />;
    case "regular_content":
      return <BlockRegularContent block={block} Html2React={Html2React} />;
    case "work":
      return <BlockWork block={block} Html2React={Html2React} />;
  }
};

export { getBlock };
