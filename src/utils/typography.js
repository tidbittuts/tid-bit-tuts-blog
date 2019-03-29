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
  'h2,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
})

const typography = new Typography(elkGlenTheme)

export default typography
