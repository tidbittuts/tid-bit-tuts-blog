import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { media } from '../../utils/style.utils'

import Logo from '../Logo/Logo'
import MobileNavigation from '../MobileNavigation/MobileNavigation'

const HeaderWrapper = styled.header`
  grid-area: header;
  background: #fff;
  padding: 10px 20px;

  @media (min-width: 768px) {
    background: #333;
    position: fixed;
    height: 100%;
    width: 200px;
  }
`
const HeaderContainer = styled.div`
  /* position: fixed; */
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <MobileNavigation />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
