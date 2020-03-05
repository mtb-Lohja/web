import React from "react";
import Helmet from "react-helmet";

import Header from "../Header";
import Navigation from "../Navigation";

import "./normalize.css";
import "./typography.css";
import "./styles.scss";

const Layout = ({ children }) => (
  <div style={{ margin: "0 auto", maxWidth: 960 }}>
    <Helmet
      title="MTB-Lohja toy"
      meta={[
        {
          name: "description",
          content: "MTB-Lohja toy - maastopyöräilyä Lohjalla"
        },
        { name: "keywords", content: "mtb, maastopyöräily" }
      ]}
    />
    <Header>
      <Navigation />
    </Header>

    <div>{children}</div>
  </div>
);

export default Layout;
