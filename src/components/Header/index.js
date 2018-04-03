import React from 'react'
import Link from 'gatsby-link'

import headerImg from './header.jpg';
import './header.scss';

const Header = () => (
  <div id="header"
      style={{
        width: '100%',
        maxWidth: 960,
        margin: '0.8rem auto 0.4rem auto',
      }}
    >  
    <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <div id="header-img"
        style={{
          width: '100%',
          minHeight: '105px',
          paddingBottom: '5%',
          background: `no-repeat url(${headerImg})`,
          backgroundSize: 'contain'
        }}
      >
      </div>      
      <h1 id="header-txt" style={{ margin: 0 }}>MTB-Lohja toy</h1>
    </Link>  
  </div>
)

export default Header
