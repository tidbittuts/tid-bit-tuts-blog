import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import SEO from '../components/Seo/Seo'
import Header from '../components/Header/Header'

// Replace with Typography
// import '../styles/styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <SEO
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: `${data.site.siteMetadata.description}`,
              },
            ]}
          >
            <html lang="en" />
          </SEO>
          <Header />

          <main>{children}</main>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
