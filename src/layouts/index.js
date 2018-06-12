import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/navbar'
import Header from '../components/header'
import _Footer from '../components/_footer'

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
    {/* React Helmet */}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="http://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
        rel="stylesheet"
      />
    </Helmet>

    <NavBar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '2em',
      }}
    >
      <div>{children()}</div>
    </div>
    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />

    <_Footer />
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
