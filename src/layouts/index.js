import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme/theme'

import SEO from '../components/Seo/Seo'
import Header from '../components/Header/Header'
import Aside from '../components/Aside/Aside'
import Footer from '../components/Footer/Footer'

require('prismjs/plugins/line-numbers/prism-line-numbers.css')

// Replace with Typography
// import '../styles/styles.scss'

const PageWrapper = styled.div`
  display: grid;
  height: 100vh;

  grid-template-areas:
    'header'
    'side'
    'content'
    'footer';

  grid-template-columns: 1fr;
  grid-template-rows:
    auto /* Header */
    minmax(75px, auto) /* Nav */
    1fr /* Content */
    minmax(75px, auto) /* Sidebar */
    auto; /* Footer */

  @media (min-width: 768px) {
    grid-template-areas: 'header content side';
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-gap: 0;
  }
`

const Main = styled.main`
  background: #99badd;
  grid-area: content;
`
const MainContent = styled.div`
  /* max-width: 900px;
  margin: 0 auto; */
`

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
        <PageWrapper>
          <Header />
          <Main>
            <MainContent>{children}</MainContent>
          </Main>
          <Aside />
          {/* <Footer /> */}
        </PageWrapper>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
