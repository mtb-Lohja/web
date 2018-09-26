import React from 'react'
import { Link } from 'gatsby'

import headerImg from './header.jpg'
import './header.scss'

const Header = ({ children }) => (
  <div
    id="header"
    style={{
      margin: '0.8rem auto 0 auto',
    }}
  >
    <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <div
        id="header-img"
        style={{
          width: '100%',
          minHeight: '105px',
          paddingBottom: '5%',
          background: `no-repeat url(${headerImg})`,
          backgroundSize: 'contain',
        }}
      />
      <h1 id="header-txt" style={{ margin: 0 }}>
        MTB-Lohja toy
      </h1>
    </Link>
    {children}
  </div>
)

export default Header
