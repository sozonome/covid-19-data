import React from "react";
import { useState } from "react";
import { AppTheme } from "../styles/themeColor";
import SectionTitle from "./sectionTitle";

export default function CountrySearch(props) {
  const { countries, callDataPerCountry } = props;
  const [countryInput, setCountryInput] = useState();
  return (
    <div className="p-4">
      <SectionTitle text="Search by Country" />
      <div className="flex">
        <input
          className="shadow bg-gray-300 appearance-none border rounded-lg w-2/3 h-12 p-2"
          onChange={event => {
            if (event.target.value === "none") {
              return;
            } else {
              setCountryInput(event.target.value);
            }
          }}
          type="text"
          list="countries"
          name="country"
          id="country"
        />
        <datalist id="countries">
          <option value={"none"}>Select Here</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name} />
          ))}
        </datalist>
        <div className="w-1/3">
          <button
            className="bg-blue-200 h-12 px-4 w-5/6 ml-4 rounded-lg text-white"
            style={{
              background: AppTheme.mainBrown
            }}
            onClick={() => {
              callDataPerCountry(countryInput);
            }}
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
}
