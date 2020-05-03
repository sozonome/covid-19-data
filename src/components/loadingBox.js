import React from "react";
import { Pane, Paragraph, Spinner } from "evergreen-ui";

export default function LoadingBox(props) {
  const { marginY } = props;
  return (
    <Pane>
      <Paragraph textAlign="center">Please Wait...</Paragraph>
      <Spinner marginX="auto" marginY={marginY} />
    </Pane>
  );
}
