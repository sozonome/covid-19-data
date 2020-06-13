import React from "react";
import formatDate from "../functions/formatDate";
import formatNumber from "../functions/formatNumber";

export default function DataBox(props) {
  const { title, lastUpdate, data, type, flag } = props;
  return (
    <div>
      {title ? <h1>{title}</h1> : null}
      {lastUpdate ? (
        <p>Last Update : {formatDate(data.lastUpdate)}</p>
      ) : null}
      <div
        className={`rounded-lg ${
          type === "global" ? `bg-gray-100` : `bg-gray-200`
        } p-5`}
      >
        {flag ? (
          <div className="mb-6">
            <span className="text-4xl">{flag}</span>
          </div>
        ) : null}
        <div className={`sm:flex`}>
          <div className="w-full sm:w-2/6 mb-2">
            <h2>
              {formatNumber(data.confirmed.value)}
            </h2>
            <h2 >
              Confirmed
            </h2>
          </div>
          <div className="w-full sm:w-2/6 mb-2">
            <h2>
              {formatNumber(data.recovered.value)}
            </h2>
            <h2 >
              Recovered
            </h2>
          </div>
          <div className="w-full sm:w-2/6">
            <h2>
              {formatNumber(data.deaths.value)}
            </h2>
            <h2>
              Deaths
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
