import React from "react";
import { Link } from "gatsby";
import { AppTheme } from "../styles/themeColor";

export default function Footer() {
  return (
    <footer className="px-4 py-8" style={{color:AppTheme.mainDarkBlue}}>
      <div>
        {new Date().getFullYear()} -{" "}
        <Link to="/about" className="font-bold underline">
          About
        </Link>
      </div>
    </footer>
  );
}
