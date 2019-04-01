import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

const FooterWrapper = styled.footer`
  background: #333333;
  padding: 20px;
  color: #fff;
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
