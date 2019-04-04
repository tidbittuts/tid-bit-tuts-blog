import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

import Logo from '../Logo/Logo'

const HeaderWrapper = styled.header`
  background: #529106;
  padding: 20px;
  grid-area: header;
`
const HeaderContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
