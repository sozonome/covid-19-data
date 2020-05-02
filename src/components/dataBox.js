import React from "react"
import { Pane, Heading, Text } from "evergreen-ui"
import formatDate from "../functions/formatDate"
import formatNumber from "../functions/formatNumber"
import { AppTheme } from "../styles/themeColor"

export default function DataBox(props) {
  const { title, lastUpdate, data, type } = props;
  return (
    <Pane>
      {title ? <Heading size={700}>{title}</Heading> : null}
      {lastUpdate ? (
        <Text>Last Update : {formatDate(data.lastUpdate)}</Text>
      ) : null}
      <div className={`sm:flex rounded-lg ${ type==="global" ? `bg-gray-300` : `bg-gray-100`} shadow-xl p-5`}>
        <div className="w-screen sm:w-2/6 mb-2">
          <Heading size={900} color="#DE7356">
            {formatNumber(data.confirmed.value)}
          </Heading>
          <Heading size={200} textTransform={"uppercase"}>
            Confirmed
          </Heading>
        </div>
        <div className="w-screen sm:w-2/6 mb-2">
          <Heading size={900} color="teal">
            {formatNumber(data.recovered.value)}
          </Heading>
          <Heading size={200} textTransform={"uppercase"}>
            Recovered
          </Heading>
        </div>
        <div className="w-screen sm:w-2/6">
          <Heading size={900} color="#AB5159">
            {formatNumber(data.deaths.value)}
          </Heading>
          <Heading size={200} textTransform={"uppercase"}>
            Deaths
          </Heading>
        </div>
      </div>
    </Pane>
  )
}
