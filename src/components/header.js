import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import AppIcon from "../images/v-19.png";
import { AppTheme } from "../styles/themeColor";

const Header = ({ siteTitle }) => (
  <header style={{
    maxWidth:800,
    margin: '0 auto',
  }}>
    <div className="flex my-4 px-4">
      <img className="w-12" src={AppIcon} alt="App Icon" />
      <div className="flex self-center text-white font-semibold text-2xl mx-2 px-2 py-1" style={{
        backgroundColor: AppTheme.mainBrown
      }}>
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
