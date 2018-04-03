import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

import './normalize.css'
import './typography.css'
import './styles.scss'

const TemplateWrapper = ({ children, location }) => (
  <div style={{ margin: '0 auto', maxWidth: 960 }} >
    <Helmet
      title="MTB-Lohja toy"
      meta={[
        { name: 'description', content: 'MTB-Lohja toy - maastopyöräilyä Lohjalla' },
        { name: 'keywords', content: 'mtb, maastopyöräily' },
      ]}
    />  
    <Header>
      <Navigation location={location} />
    </Header>
    
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
