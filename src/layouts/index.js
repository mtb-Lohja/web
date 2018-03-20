import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

import './index.css'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="MTB-Lohja toy"
      meta={[
        { name: 'description', content: 'MTB-Lohja toy - maastopyöräilyä Lohjalla' },
        { name: 'keywords', content: 'mtb, maastopyöräily' },
      ]}
    />  
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      <Navigation location={location} />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
