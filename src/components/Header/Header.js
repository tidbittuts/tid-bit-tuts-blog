import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { media } from '../../utils/style.utils'

import Logo from '../Logo/Logo'

const HeaderWrapper = styled.header`
  grid-area: header;
  background: #529106;
  padding: 10px 20px;
`
const HeaderContainer = styled.div``

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
