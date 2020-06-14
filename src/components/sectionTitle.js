import React from "react";

export default function SectionTitle(props) {
  const {text} = props;
  return (
    <h2 className="uppercase font-semibold tracking-wider mb-2">
      {text}
    </h2>
  );
}
