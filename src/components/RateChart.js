import React, { useEffect, useState } from "react";
import LoadingBox from "./loadingBox";
import formatNumber from "../functions/formatNumber";
import { ResponsiveLine } from "@nivo/line";

export default function RateChart(props) {
  const { data, takeRecent, title } = props;

  const [chartData, setChartData] = useState();
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    // Pick 20 Last Entry
    const take = takeRecent === undefined ? 20 : takeRecent;

    let dates = [];
    let totals = [];
    let length = 0;
    for (let i = 0; i < data.length; i = i + Math.floor(data.length / take)) {
      dates.push(data[i].date);
      if (length === 0) {
        totals.push(data[i].total);
      } else {
        totals.push(data[i].total - totals[length - 1]);
      }
      length++;
    }

    let chartContent = [
      {
        id: title,
        data: [],
      },
    ];
    totals.forEach((entry, i) => {
      chartContent[0].data.push({
        x: dates[i],
        y: entry,
      });
    });

    setChartData(chartContent);
    setBusy(false);
  }, [data]);

  return (
    <div>
      <div>
        <h2 className="uppercase font-medium text-xs text-center sm:text-sm">
          {title}
        </h2>
      </div>
      {busy ? (
        <LoadingBox />
      ) : chartData ? (
        <div className="w-full h-64">
          <ResponsiveLine
            curve="basis"
            colors={{
              scheme: "red_blue",
            }}
            yFormat={e => formatNumber(e)}
            data={chartData}
            enableArea={true}
            enableGridX={false}
            enablePoints={false}
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            useMesh={true}
            axisBottom={null}
          />
        </div>
      ) : null}
    </div>
  );
}
