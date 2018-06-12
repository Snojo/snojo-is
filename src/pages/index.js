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
} from 'react-materialize'

const IndexPage = () => (
  <div>
    <div className="section white">
      <div className="row container">
        <h1>Welcome</h1>
        <p>This is my personal website in the making.</p>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </div>
  </div>
)

export default IndexPage
