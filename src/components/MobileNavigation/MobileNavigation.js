import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled'

import Logo from '../Logo/Logo'

// refactor, this is no longer just mobile nav its the main nav

const MobileMenu = styled.div`

  @media (min-width: 768px) {
    position: fixed;
    width: 150px;
  }
`

const BrandBurgerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HamburgerButton = styled.button`
  margin: 0 0 0 0.5rem;
  width: 26px;
  height: 20px;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    top: 50%;
    margin: -2px;
    &, &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      height: 4px;
      background: ${props => props.theme.colors.color_brand_2};
    }

    &:before {
      top: -8px;
    }

    &:after {
      bottom: -8px;
    }
  }
`

const MobileNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  &.is-active {
    display: block;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-bottom: 1px solid black;

    @media (min-width: 768px) {
      border-bottom: 1px solid #fff;
    }
  }

  a {
    display: block;
    padding: 10px;

    @media (min-width: 768px) {
      color: #fff;
    }
  }
`

class MobileNavigation extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';

    return (
      <MobileMenu>
        <BrandBurgerWrapper>
          <Logo/>
          <HamburgerButton className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
            <span></span>
          </HamburgerButton>
        </BrandBurgerWrapper>
        <MobileNav className={`navbar-menu ${menuActive}`}>
          <ul>
            <li>
              <Link to="/" onClick={this.toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={this.toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={this.toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </MobileNav>
      </MobileMenu>
    )
  }
};

export default MobileNavigation;