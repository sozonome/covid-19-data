import React from "react";
import formatDate from "../functions/formatDate";
import formatNumber from "../functions/formatNumber";
import { AppTheme } from "../styles/themeColor";

export default function DataBoxCountry(props) {
  const { title, lastUpdate, data, type, flag } = props;
  return (
    <div className="p-4">
      {title ? (
        <h1 className="uppercase font-semibold tracking-wider">{title}</h1>
      ) : null}

      <div>
        {flag ? (
          <div className="mb-6">
            <span className="text-4xl">{flag}</span>
          </div>
        ) : null}
        <div className="flex items-end">
          <div className="w-full sm:w-2/6">
            <h2
              className="text-2xl font-bold"
              style={{ color: AppTheme.stdWarning }}
            >
              {formatNumber(data.confirmed.value)}
            </h2>
            <p>confirmed</p>
          </div>
          <div className="w-full sm:w-2/6">
            <h2
              className="text-2xl font-bold"
              style={{ color: AppTheme.stdSuccess }}
            >
              {formatNumber(data.recovered.value)}
            </h2>
            <p>recovered</p>
          </div>
          <div className="w-full sm:w-2/6">
            <h2
              className="text-xl font-bold"
              style={{ color: AppTheme.stdDanger }}
            >
              {formatNumber(data.deaths.value)}
            </h2>
            <p>deaths</p>
          </div>
        </div>
      </div>
    </div>
  );
}
