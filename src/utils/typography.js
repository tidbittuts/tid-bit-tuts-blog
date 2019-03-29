/**
 * Typography docs for more options
 *
 * See: https://kyleamathews.github.io/typography.js/
 */

import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

elkGlenTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
  },
  img: {
    marginBottom: '0',
  },
  'h2,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(1.5),
  },
  main: {
    maxWidth: '48rem',
    margin: '0 auto',
    padding: '0 0.625rem',
  },
  '@media only screen and (min-width:47.5rem)': {
    main: {
      padding: '0 1.25rem',
    },
  },
})

const typography = new Typography(elkGlenTheme)

export default typography
