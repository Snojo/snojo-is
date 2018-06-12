import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/navbar'
import Header from '../components/header'
import _Footer from '../components/_footer'
import { Parallax, Background } from 'react-parallax'

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
  MediaBox,
} from 'react-materialize'
import GatsbyLink from 'gatsby-link'
const parall = require('../img/parallax1.jpg')
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
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
        rel="stylesheet"
      />
    </Helmet>

    <NavBar />

    <Parallax blur={0} bgImage={parall} bgImageAlt="the cat" strength={500}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          // padding: '0px 1.0875rem 1.45rem',
          paddingTop: '2em',
          height: '1000px',
        }}
      >
        <div>{children()}</div>
      </div>
      <div style={{ height: '200px' }} />
    </Parallax>

    {/* <Parallax imageSrc={parall} /> */}

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
