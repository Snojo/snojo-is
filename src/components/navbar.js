import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'
import Sidenav from './sidenav'
import {
  Button,
  Card,
  Row,
  Col,
  Icon,
  Navbar,
  NavItem,
  Footer,
  SideNav,
  SideNavItem,
  Parallax,
  MediaBox,
} from 'react-materialize'

const NavBar = () => (
  <Navbar brand="SnoJo.is" left className="black">
    {/* <Sidenav /> */}

    <Button
      waves="light"
      className="grey darken-3"
      onClick={() => navigateTo('/')}
    >
      Home
    </Button>

    <Button
      waves="light"
      className="grey darken-3"
      onClick={() => navigateTo('/page-2/')}
    >
      Page2
    </Button>

    {/* <NavItem href="/">Home</NavItem> */}
    {/* <NavItem href="/page-2/">Page 2</NavItem> */}
  </Navbar>
)

export default NavBar

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
