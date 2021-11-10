import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import { Container } from "../styles/theme";

const Header = ({ state }) => {
  return (
    <Footer>
        <TopFooter>
          <FooterContainer>
            <div>
              <h2>Want to work together?</h2>
              <a className="mailtoui" href="mailto:hello@blueboxdigital.co.uk">Let's talk!</a>
            </div>
            <div className="footer-nav">
              {/* <Link link="/">Home</Link> */}
            </div>
          </FooterContainer>
        </TopFooter>
      <FooterContainer>
        <img
          style={{ height: "100%", width: "70px" }}
          className="small-logo"
          sizes="(max-width: 1920px) 300w, (max-width: 1024px) 300w, (max-width: 800px) 300w"
          src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/small-logo-white.png"
        ></img>
        <div className="social-links">
          <a href="https://github.com/ben-wright">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/github-logo.svg" />
          </a>
          <a href="https://www.instagram.com/benwrightdev/">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/instagram-logo.svg" />
          </a>
          <a href="https://www.linkedin.com/in/ben-wright-8271439a/">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/linkedin-logo.svg" />
          </a>
          <a href="https://twitter.com/benwrightdev">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/twitter-logo.svg" />
          </a>
          <a href="https://www.upwork.com/freelancers/~015709233c9cd66799">
            <Icon src="https://wp.benwrightdev.com/wp-content/uploads/2020/11/upwork-tile.svg" />
          </a>
          <a href="https://www.toptal.com/resume/ben-wright#annex-exclusively-accomplished-web-development-contractors">
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
  padding: 72px 0 36px 0;
  background: #171717;
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

const TopFooter = styled.div`
  margin-bottom: 72px;
  * {
    color: white;
  }
  h2 {
    margin-bottom: 12px;
  }
  a {
    font-size: 2rem;
    color: #9f9f9f;
    text-decoration: underline;
  }
  .footer-nav > * {
    margin: auto 24px;
  }
`;