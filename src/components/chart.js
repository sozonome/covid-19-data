import React, { useEffect, useState } from "react";
import { Card, Heading, Pane } from "evergreen-ui";
import { Line } from "react-chartjs-2";
import LoadingBox from "./loadingBox";
import formatNumber from "../functions/formatNumber";

export default function Chart(props) {
  const {
    data,
    takeRecent,
    title,
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
    
    const dates = data.map(d => d.date).splice(data.length - (take + 1), take);
    const totals = data
      .map(d => d.total)
      .splice(data.length - (take + 1), take);

    let componentState = { ...chartData };

    componentState.labels = dates;
    componentState.datasets = [
      {
        label: title,
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
    ];
    setChartData(componentState);
    setBusy(false);
  }, []);

  return (
    <Card elevation={3} padding={16} marginBottom={20}>
      <Pane textAlign="center">
        <Heading size={700} fontWeight={700}>
          {title}
        </Heading>
        <Heading size={400} fontWeight={500}>
          {subTitle}
        </Heading>
      </Pane>
      {busy ? (
        <LoadingBox />
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
    </Card>
  );
}
