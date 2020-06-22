import React from 'react'
import { Composition } from 'atomic-layout'

// Define layout areas: visual representation
// of what composes a layout, detached from
// what components are actually rendered.
const areasMobile = `
  thumbnail
  header
  footer
`

// Declare responsive changes of your areas.
// Operate in two dimensions, remove areas
// or introduce new ones.
const areasTablet = `
  thumbnail header
  thumbnail footer
`

const NoMatch= ({ title, imageUrl, actions }) => (
  <Composition areas={areasMobile} areasMd={areasTablet} gap={20}>
    {/* Get React components based on provided areas */}
    {({ Thumbnail, Header, Footer }) => (
      <React.Fragment>
        <Thumbnail>
          {/* Render anything, including another Composition */}
          <img src={imageUrl} alt={title} />
        </Thumbnail>
        {/* Preserve semantics with polymorphic prop */}
        <Header as="h3">{title}</Header>
        {/* Responsive props: just suffix with a breakpoint name */}
        <Footer padding={10} paddingMd={20}>
          {actions}
        </Footer>
      </React.Fragment>
    )}
  </Composition>
)

export default NoMatch;