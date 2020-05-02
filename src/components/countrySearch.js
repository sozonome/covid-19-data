import React from "react"
import { Select, Pane, Heading } from "evergreen-ui"

export default function CountrySearch(props) {
  const { countries, callDataPerCountry } = props
  return (
    <Pane>
      <Heading size={500}>Search by Country</Heading>

      <Select
        onChange={event => {
          if (event.target.value === "none") {
            return
          }
          callDataPerCountry(event.target.value)
        }}
      >
        <option value={"none"}>Select Here</option>
        {countries.map(country => (
          <option value={country.name}>{country.name}</option>
        ))}
      </Select>
    </Pane>
  )
}
