import React, { useState } from "react";
import { Pane, Heading, Paragraph, Button, toaster } from "evergreen-ui";
import formatNumber from "../functions/formatNumber";

export default function DailySummaryBox(props) {
  const { data } = props;
  const [index, setIndex] = useState(data.length - 1);

  return (
    <Pane marginBottom={30}>
      <Heading>Daily Summary</Heading>
      <div>
        <Paragraph size={400}>
          Report Date:{" "}
          {new Date(data[index].reportDate).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Paragraph>
        <div className="sm:flex">
          <div className="my-2 w-full sm:w-1/2">
            <Heading size={300} color={"#DE7356"} textTransform={"uppercase"}>
              Confirmed
            </Heading>
            <Paragraph size={600}>
              Total: {formatNumber(data[index].totalConfirmed)}
            </Paragraph>
            <Paragraph>
              Mainland China: {formatNumber(data[index].mainlandChina)}
            </Paragraph>
            <Paragraph>
              Other Locations : {formatNumber(data[index].otherLocations)}
            </Paragraph>
          </div>
          <div className="my-2 w-full sm:w-1/2">
            <Heading size={300} color={"#AB5159"} textTransform={"uppercase"}>
              Deaths
            </Heading>
            <Paragraph size={600}>
              Total: {formatNumber(data[index].deaths.total)}
            </Paragraph>
            <Paragraph>
              China: {formatNumber(data[index].deaths.china)}
            </Paragraph>
            <Paragraph>
              Outside China : {formatNumber(data[index].deaths.outsideChina)}
            </Paragraph>
          </div>
        </div>
      </div>
      <div>
        <Button
          iconBefore="arrow-left"
          onClick={() => {
            index === 0 ? setIndex(0) : setIndex(index - 1);
            if (index === 0)
              toaster.warning(
                "This is already the first entry of Daily Summary"
              );
          }}
        >
          Prev Day
        </Button>
        <Button
          marginLeft={20}
          iconAfter="arrow-right"
          onClick={() => {
            index === data.length - 1
              ? setIndex(data.length - 1)
              : setIndex(index + 1);
            if (index === data.length - 1)
              toaster.warning("This is already the latest Daily Summary");
          }}
        >
          Next Day
        </Button>
      </div>
    </Pane>
  );
}
