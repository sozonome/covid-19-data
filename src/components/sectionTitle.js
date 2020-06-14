import React from "react";
import { AppTheme } from "../styles/themeColor";

export default function SectionTitle(props) {
  const {text} = props;
  return (
    <h2 className="uppercase font-semibold tracking-wider mb-2" style={{color: AppTheme.mainBrown}}>
      {text}
    </h2>
  );
}
