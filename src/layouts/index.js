import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from '../assets/logo.jpg';

import './index.sass';
import gatsbyPluginCatchLinks from 'gatsby-plugin-catch-links';

const Navbar = () => (
  <nav className="navbar">
    <div className="navigation-wrapper">
      <Link to="/" className="brand">
        <figure className="logo">
          <img src={logo} alt="TidBitTuts logo" style={{ width: '88px' }} />
        </figure>
      </Link>

      <div className="navigation">
        <Link>Home</Link>
        <Link>Blog</Link>
        <Link>About</Link>
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

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div className="container">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
