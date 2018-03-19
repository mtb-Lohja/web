import React from 'react'
import Link from 'gatsby-link'

import headerImg from './header.jpg';

const Header = () => (
  <div
    style={{
      margin: '1rem auto 1.45rem auto',
      maxWidth: 960,
      background: `no-repeat url(${headerImg})`,
      backgroundSize: 'auto 100%'
    }}
  >
    <div
      style={{
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          MTB-Lohja toy
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
