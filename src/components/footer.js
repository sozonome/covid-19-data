import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()} -{" "}
        <Link to="/about" className="font-bold underline">
          About
        </Link>
      </div>
    </footer>
  );
}
