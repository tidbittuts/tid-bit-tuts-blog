import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
// import styled from 'styled-components'
import theme from '../theme/theme'

import SEO from '../components/Seo/Seo'
import Header from '../components/Header/Header'
import MainNavigation from '../components/MainNavigation/MainNavigation'
import Aside from '../components/Aside/Aside'
import Footer from '../components/Footer/Footer'

require('prismjs/plugins/line-numbers/prism-line-numbers.css')

// Replace with Typography
// import '../styles/styles.scss'

const PageWrapper = styled.div`
  display: grid;

  grid-template-areas:
    'header header header'
    'nav content side'
    'footer footer footer';

  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-gap: 0;

  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      'header'
      'nav'
      'content'
      'side'
      'footer';

    grid-template-columns: 1fr;
    grid-template-rows:
      auto /* Header */
      minmax(75px, auto) /* Nav */
      1fr /* Content */
      minmax(75px, auto) /* Sidebar */
      auto; /* Footer */
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
          <PageWrapper>
            <Header />
            <MainNavigation />
            <Main>
              <MainContent>{children}</MainContent>
            </Main>
            <Aside />
            <Footer />
          </PageWrapper>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
