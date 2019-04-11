import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const _ = require('lodash')

const TagsNavigation = styled.nav``

const TagsNav = ({ tags }) => (
  <>
    {tags && (
      <TagsNavigation>
        {tags.map(tag => (
          <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
        ))}
      </TagsNavigation>
    )}
  </>
)

export default TagsNav
