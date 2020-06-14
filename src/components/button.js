import React from "react";
import { AppTheme } from "../styles/themeColor";

export default function AppButton(props) {
  const { text } = props;
  return (
    <button
      className="text-white rounded-lg p-2 w-1/2 sm:w-1/3 font-medium"
      style={{ backgroundColor: AppTheme.mainDarkBlue }}
    >
      {text}
    </button>
  );
}
