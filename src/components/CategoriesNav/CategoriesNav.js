import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const _ = require('lodash')

const CatNavigation = styled.nav``

const CategoriesNav = ({ categories }) => (
  <>
    {categories && (
      <CatNavigation>
        {categories.map(category => (
          <Link to={`/categories/${_.kebabCase(category)}`}>{category}</Link>
        ))}
      </CatNavigation>
    )}
  </>
)

export default CategoriesNav
