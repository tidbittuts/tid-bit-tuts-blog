import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../../images/gatsby-icon.png'

const SiteBranding = styled.div`
  img {
    display: block;
    width: 75px;
    height: auto;
  }
`
const Logo = () => (
  <SiteBranding>
    <Link to="/">
      <img src={logo} alt="TBT Logo" />
    </Link>
  </SiteBranding>
)

export default Logo
