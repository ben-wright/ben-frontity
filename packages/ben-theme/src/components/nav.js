import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Image from "@frontity/components/image";
import imageUrl from "../../assets/Ben-Wright-logo.svg";
import { Container } from "../styles/theme";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <Container
    css={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Link link="/">
      <Image src={imageUrl} css={{ width: "220px" }} />
    </Link>
    <ul>
      <HeaderList>
        <Link link="/work/">Work</Link>
      </HeaderList>
      <HeaderList>
        <Link link="/about/">About</Link>
      </HeaderList>
      <a href="https://www.toptal.com/resume/ben-wright#annex-exclusively-accomplished-web-development-contractors">
        <OutlineHeaderList>Hire Ben</OutlineHeaderList>
      </a>
    </ul>
  </Container>
);

export default connect(Nav);

const HeaderList = styled.li`
  font-size: 1.6rem;
  display: inline-block;
  list-style: none;
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: bold;
`;

const OutlineHeaderList = styled(HeaderList)`
  border: 1px solid #1c1c1c;
  margin-left: 15px;
`;
