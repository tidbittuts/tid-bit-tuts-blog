import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { media } from '../../utils/style.utils'

const MostRecentExcerptWrapper = styled.article`
  h2 a {
    color: ${props => props.theme.colors.color_brand_1};
  }
`

const MostRecentPost = ({ posts }) => {
  const postArray = [...posts]
  const recentPost = postArray[0]
  const { node } = recentPost
  const { title } = node.fields
  console.log(postArray)
  console.log(recentPost)
  console.log(node.title)
  return (
    <MostRecentExcerptWrapper key={node.id}>
      <header>
        <h2>
          <Link to={node.fields.postUrl}>Most Recent Post: {title}</Link>
        </h2>
      </header>
      <div className="entry-meta">
        <small>{node.fields.date}</small>
      </div>
      <div className="entry-content">
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    </MostRecentExcerptWrapper>
  )
}

export default MostRecentPost
