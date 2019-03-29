import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0;
    padding: 0;

    &:last-of-type {
      a {
        margin-right: 0;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1.5rem;
    text-transform: uppercase;

    &:hover {
      color: black;
    }
  }
`

const MainNav = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  </Nav>
)

export default MainNav
