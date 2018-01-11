import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';
import logo from '../assets/logo.jpg';

import './index.sass';
import gatsbyPluginCatchLinks from 'gatsby-plugin-catch-links';

const Wrapper = styled.section`
  padding: 1em 2em;
  max-width: 1200px;
  margin: 0 auto;
`;

const Navbar = () => (
  <nav className="navbar">
    <div className="navigation-wrapper">
      <Link to="/" className="brand">
        <figure className="logo">
          <img src={logo} alt="TidBitTuts logo" style={{ width: '88px' }} />
        </figure>
      </Link>

      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header>
    <Helmet
      title="TidBitTuts | Web Development Snippets"
      meta={[
        { name: 'description', content: 'A Web Development blog' },
        { name: 'keywords', content: 'web development, programming, tidbittuts' }
      ]}
    />
    <Navbar />
  </header>
);

const Footer = () => (
  <footer>
    <Wrapper>
      <p>Copyright @ MoxDev</p>
    </Wrapper>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <Wrapper>
      <div className="container">{children()}</div>
    </Wrapper>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
