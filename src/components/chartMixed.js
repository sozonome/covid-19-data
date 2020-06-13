import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import LoadingBox from "./loadingBox";
import formatNumber from "../functions/formatNumber";

export default function ChartMixed(props) {
  const {
    data,
    takeRecent,
    title,
    label,
    subTitle,
    borderColor,
    pointBorderColor,
    pointBackgroundColor,
    backgroundColor,
  } = props;

  const [chartData, setChartData] = useState();
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    // Pick 20 Last Entry
    const take = takeRecent === undefined ? 20 : takeRecent;
    
    const dates = data[0].map(d => d.date).splice(data.length - (take + 1), take);
    const totals = data[0]
      .map(d => d.total)
      .splice(data.length - (take + 1), take);

    const totals2 = data[1]
      .map(d => d.total)
      .splice(data.length - (take + 1), take);
    const totals3 = data[2]
      .map(d => d.total)
      .splice(data.length - (take + 1), take);

    let componentState = { ...chartData };

    componentState.labels = dates;
    componentState.datasets = [
      {
        label: label[0],
        data: totals,
        // Line color
        borderColor:
          borderColor === undefined ? "rgba(0,0,0,0.1)" : borderColor,

        pointBorderColor:
          pointBorderColor === undefined ? "rgba(0,0,0,0.1)" : pointBorderColor,
        pointBackgroundColor:
          pointBackgroundColor === undefined
            ? "rgba(0,0,0,0.1)"
            : pointBackgroundColor,
        backgroundColor:
          backgroundColor === undefined ? "rgba(0,0,0,0.1)" : backgroundColor,
      },
      {
        label: label[1],
        data: totals2
      },
      {
        label: label[2],
        data: totals3
      }
    ];
    setChartData(componentState);
    setBusy(false);
  }, []);

  return (
    <div>
      <div>
        <h2>
          {title}
        </h2>
        <h2>
          {subTitle}
        </h2>
      </div>
      {busy ? (
        <LoadingBox/>
      ) : chartData ? (
        <Line
          data={chartData}
          options={{
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: value => formatNumber(value),
                  },
                },
              ],
            },
            responsive: true,
          }}
          // height={350}
        />
      ) : null}
    </div>
  );
}
