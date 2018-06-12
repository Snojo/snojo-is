import React from 'react'
import Link from 'gatsby-link'
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

const Sidenav = () => (
  <SideNav
    trigger={
      <NavItem>
        <Icon>view_module</Icon>
      </NavItem>
    }
    options={{ closeOnClick: true }}
  >
    <SideNavItem
      className="hide-on-med-and-down"
      userView
      user={{
        background: require('../img/gold.jpg'),
        image: require('../img/snorri2.jpg'),
        name: 'Snorri Hjörvar Jóhannsson',
        email: 'snojo@snojo.is',
      }}
    />
    <SideNavItem href="#!icon" icon="cloud">
      First Link With Icon
    </SideNavItem>
    <SideNavItem href="#!second">Second Link</SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>Subheader</SideNavItem>
    <SideNavItem waves href="#!third">
      Third Link With Waves
    </SideNavItem>
  </SideNav>
)

export default Sidenav

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
