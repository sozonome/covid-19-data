import React, { useState } from "react"
import { Select, Pane, Heading } from "evergreen-ui"

export default function CountrySearch(props) {
  const { countries, callDataPerCountry } = props
  const [countryFlag, setCountryFlag] = useState();
  return (
    <Pane marginTop={40}>
      <Heading size={500} marginBottom={10}>Search by Country</Heading>
      <Select
        width={300}
        height={50}
        onChange={event => {
          if (event.target.value === "none") {
            return
          }
          callDataPerCountry(event.target.value)
        }}
      >
        <option value={"none"}>Select Here</option>
        {countries.map((country, index) => (
          <option key={index} value={JSON.stringify([(country.iso2 ? country.iso2.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)):'🌐'), country.name])}>{country.name}</option>
        ))}
      </Select>
    </Pane>
  )
}
