import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../images/gatsby-icon.png'

const SiteBranding = styled.div`
  width: 100px;
  height: auto;
`
const Logo = () => (
  <SiteBranding>
    <img src={logo} alt="TBT Logo" />
  </SiteBranding>
)

export default Logo
