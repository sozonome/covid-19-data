import React, { useState } from "react";
import formatNumber from "../functions/formatNumber";

export default function DailySummaryBox(props) {
  const { data } = props;
  const [index, setIndex] = useState(data.length - 1);

  return (
    <div>
      <div>Daily Summary</div>
      <div>
        <p>
          Report Date:{" "}
          {new Date(data[index].reportDate).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div className="sm:flex">
          <div className="my-2 w-full sm:w-1/2">
            <div>
              Confirmed
            </div>
            <p>
              Total: {formatNumber(data[index].totalConfirmed)}
            </p>
            <p>
              Mainland China: {formatNumber(data[index].mainlandChina)}
            </p>
            <p>
              Other Locations : {formatNumber(data[index].otherLocations)}
            </p>
          </div>
          <div className="my-2 w-full sm:w-1/2">
            <div>
              Deaths
            </div>
            <p>
              Total: {formatNumber(data[index].deaths.total)}
            </p>
            <p>
              China: {formatNumber(data[index].deaths.china)}
            </p>
            <p>
              Outside China : {formatNumber(data[index].deaths.outsideChina)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            index === 0 ? setIndex(0) : setIndex(index - 1);
            // if (index === 0)
            //   toaster.warning(
            //     "This is already the first entry of Daily Summary"
            //   );
          }}
        >
          Prev Day
        </button>
        <button
          onClick={() => {
            index === data.length - 1
              ? setIndex(data.length - 1)
              : setIndex(index + 1);
            // if (index === data.length - 1)
            //   toaster.warning("This is already the latest Daily Summary");
          }}
        >
          Next Day
        </button>
      </div>
    </div>
  );
}
