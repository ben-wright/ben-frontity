import React from "react";
import { styled } from "frontity";
import { Container } from "../../styles/theme";

const BlockSkills = ({ block, Html2React }) => {
  return (
    <SkillsBlock>
      <Container>
        <SkillsHeading>{block.title}</SkillsHeading>
        <SkillsItemContainer>
          {block.items.map((item, i) => {
            return (
              <Item key={i} shadow={block.add_shadow}>
                <Heading>{item.title}</Heading>
                <SubHeading>{item.subtitle}</SubHeading>
                <Line style={{ background: item.color }} />
                <Paragraph>{item.description}</Paragraph>
              </Item>
            );
          })}
        </SkillsItemContainer>
      </Container>
    </SkillsBlock>
  );
};

export default BlockSkills;

const SkillsBlock = styled.div`
  padding-bottom: 75px;
`;

const SkillsHeading = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 40px 0;
`;

const SkillsItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  width: calc(100% - 40px);
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: ${(props) => {
    console.log(props);
    return props.shadow ? "1px 1px 10px 1px rgba(0,0,0,0.3)" : "none";
  }};

  @media only screen and (min-width: 768px) {
    width: calc(50% - 40px);
    margin: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: calc(33.33% - 40px);
    margin: 20px;
  }
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

const Line = styled.span`
  height: 3px;
  width: 60%;
  display: block;
  margin: 5px 0;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.2rem;
`;
