import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import AppIcon from "../images/v-19.png";

const Header = ({ siteTitle }) => (
  <header style={{
    maxWidth:800,
    margin: '0 auto',
  }}>
    <div className="flex">
      <img className="w-12" src={AppIcon} alt="App Icon" />
      <div className="flex self-center">
        <Link to="/">{siteTitle}</Link>
      </div>
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
