import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import { Container } from "../styles/theme";

const Header = ({ state }) => {
  return (
    <Footer>
      <FooterContainer>
        <img
          style={{ height: "100%", width: "70px" }}
          className="small-logo"
          sizes="(max-width: 1920px) 300w, (max-width: 1024px) 300w, (max-width: 800px) 300w"
          srcSet="https://wp.benwrightdev.com/wp-content/uploads/2020/01/Small-Ben-Wright-Logo.png 1024w,https://wp.benwrightdev.com/wp-content/uploads/2020/01/Small-Ben-Wright-Logo.png 768w,https://wp.benwrightdev.com/wp-content/uploads/2020/01/Small-Ben-Wright-Logo-300x286.png 300w"
          src="https://wp.benwrightdev.com/wp-content/uploads/2020/01/Small-Ben-Wright-Logo.png"
        ></img>
        <div className="social-links">
          <a href="https://github.com/ben-wright">
            <Icon src="https://wp.benwrightdev.com/wp-content/themes/ben/assets/github-logo.svg" />
          </a>
          <a href="https://www.instagram.com/benwrightdev/">
            <Icon src="https://wp.benwrightdev.com/wp-content/themes/ben/assets/instagram-logo.svg" />
          </a>
          <a href="https://www.linkedin.com/in/ben-wright-8271439a/">
            <Icon src="https://wp.benwrightdev.com/wp-content/themes/ben/assets/linkedin-logo.svg" />
          </a>
          <a href="https://twitter.com/benwrightdev">
            <Icon src="https://wp.benwrightdev.com/wp-content/themes/ben/assets/twitter-logo.svg" />
          </a>
          <a href="https://www.upwork.com/freelancers/~015709233c9cd66799">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/10/upwork-tile.svg" />
          </a>
          <a href="https://www.toptal.com/resume/ben-wright##annex-exclusively-accomplished-web-development-contractors">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/10/Toptal-Emblem-Blue-RGB.svg" />
          </a>
        </div>
      </FooterContainer>
    </Footer>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 374px) {
    flex-direction: column;
  }
`;

const Footer = styled.footer`
  padding: 16px 0;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.img`
  width: 30px;
  height: 100%;
  margin: 0 15px;
`;
