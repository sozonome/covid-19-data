import React from "react";

export default function CountrySearch(props) {
  const { countries, callDataPerCountry } = props;
  return (
    <div>
      <div>
        Search by Country
      </div>
      <datalist
        onChange={event => {
          if (event.target.value === "none") {
            return;
          }
          callDataPerCountry(event.target.value);
        }}
      >
        <option value={"none"}>Select Here</option>
        {countries.map((country, index) => (
          <option
            key={index}
            value={JSON.stringify([
              country.iso2
                ? country.iso2
                    .toUpperCase()
                    .replace(/./g, char =>
                      String.fromCodePoint(char.charCodeAt(0) + 127397)
                    )
                : "🌐",
              country.name,
            ])}
          >
            {country.name}
          </option>
        ))}
      </datalist>
    </div>
  );
}
