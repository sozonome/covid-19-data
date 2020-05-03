import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { AppTheme } from "../styles/themeColor";
import { Heading } from "evergreen-ui";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: AppTheme.primaryColor,
      marginBottom: `1.45rem`,
      zIndex: '5'
    }}
    className="sticky top-0"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Heading size={900}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
