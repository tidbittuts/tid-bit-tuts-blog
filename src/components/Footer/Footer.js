import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { media } from '../../utils/style.utils'

const FooterWrapper = styled.footer`
  background: #333333;
  padding: 20px;
  color: #fff;
  grid-area: footer;
`
const FooterContainer = styled.footer``

const Footer = data => (
  <FooterWrapper>
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
