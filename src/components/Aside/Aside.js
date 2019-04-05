import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

const AsideDiv = styled.aside`
  grid-area: side;
  background: pink;
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`
const AsideContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`

const Aside = () => (
  <AsideDiv>
    <AsideContainer>Aside</AsideContainer>
  </AsideDiv>
)

export default Aside
