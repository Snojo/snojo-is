import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
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
import GatsbyLink from 'gatsby-link'

const Layout = ({ children, data }) => (
  <div>
    {/* This is NavBar  */}
    <div>
      <Navbar brand={data.site.siteMetadata.title} left className="black">
        <div>
          <SideNav
            trigger={
              <NavItem>
                <Icon>view_module</Icon>
              </NavItem>
            }
            options={{ closeOnClick: true }}
          >
            <SideNavItem
              userView
              user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com',
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
        </div>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/page-2/">Page 2</NavItem>
        {/* This is Sidenav */}
      </Navbar>
    </div>
    {/* React Helmet */}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '2em',
      }}
    >
      <div>
        <div>
          <div className="section white">
            <div className="row container">
              {/* Content  */}
              {children()}
              <MediaBox
                src="http://materializecss.com/images/parallax1.jpg"
                caption="A demo media box1"
                width="350"
              />
              {/* SliderThis is our big Tagline!Here's our sm{' '} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
    {/* Footer  */}
    <div>
      <Footer
        copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Link 4
              </a>
            </li>
          </ul>
        }
        className="black"
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footer>;
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
