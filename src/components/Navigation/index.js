import React, { Component } from "react";
import Link from 'gatsby-link';
import './navigation.scss'

class Navigation extends Component {
  render() {
    const { location } = this.props;

    const ListLink = ({ to, exact, text, children, ...rest }) =>
      <li>
        <Link activeClassName="nav-active" to={to} exact={exact} {...rest}>
          {text}
        </Link>
        {children}
      </li>

    const nav = {
      "/": {
        exact: true,
        text: "Etusivu"
      },
      "/uutiset": {
        text: "Uutiset"
      },                  
      "/24h": {
        text: "MTB-Lohja 24h",
        sub: {
          "/24h/ukk": { text: "UKK" },
          "/24h/2006": { text: "2006" },
          "/24h/2007": { text: "2007" },
          "/24h/2008": { text: "2008" },
          "/24h/2009": { text: "2009" },
          "/24h/2010": { text: "2010" },
          "/24h/2011": { text: "2011" }
        }
      },
      "/oktoberfest": {
        text: "Oktoberfest",
        sub: {
          "/oktoberfest/2006": { text: "2006" },
          "/oktoberfest/2007": { text: "2007" },
          "/oktoberfest/2008": { text: "2008" },
          "/oktoberfest/2009": { text: "2009" },
          "/oktoberfest/2010": { text: "2010" },
          "/oktoberfest/2011": { text: "2011" },
          "/oktoberfest/2012": { text: "2012" },
          "/oktoberfest/2013": { text: "2013" },
        }        
      }, 
      "/viikkoajot": {
        text: "Viikkoajot"
      },            
      "/foorumi": {
        text: "foorumi"
      },                  
      "/tietoa": {
        text: "Mikä?"
      }
    }

    let subNav = null;

    // Iterate through paths and check which one is active
    Object.keys(nav).forEach(path => {
      let cur = nav[path];
      
      // Use given test (.test property in data), or path if not given
      let pathReg = new RegExp("^" + (cur.test ? cur.test : path) + (cur.exact ? "$" : ""));

      if (pathReg.test(location.pathname)) {
        cur.active = true;
        subNav = cur.sub;
      } else if (cur.sub) {
        // Check if any subpath matches
        Object.keys(cur.sub).forEach(subpath => {
          var subReg = new RegExp("^" + subpath);
          if (subReg.test(location.pathname)) {
            cur.active = true;
            cur.sub[subpath].active = true;
            subNav = cur.sub;
          }
        });
      }
    });

    return (
      <nav id="nav">
        <ul className="nav-main">
          {
            Object.keys(nav).map(p => 
              <ListLink key={p} to={p} exact={nav[p].exact} text={nav[p].text} className={nav[p].active ? "nav-active" : ""} />
            )
          }
        </ul>
        { subNav ? 
          <ul className="nav-sub">
          {
            Object.keys(subNav).map(p => 
              <ListLink key={p} to={p} exact={subNav[p].exact} text={subNav[p].text} />
            ) 
          } 
          </ul> : false } 
      </nav>
    );
  }
}

export default Navigation;
