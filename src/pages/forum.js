import React from "react";
import Helmet from 'react-helmet'

const ForumRedirectPage = () => {

  return (
    <div>
      <Helmet
        meta={[
          { 'http-equiv': 'refresh', content: '2; URL=http://forum.mtb-lohja.com' }
        ]}
      />  

      <h1>Ohjataan foorumille...</h1>
    </div>);
};

export default ForumRedirectPage;

