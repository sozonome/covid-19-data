import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import Select from "react-select";

import Error from "../Error";
import Loading from "../Loading";
import { CountryStat } from "../stats";

import { useCountryList } from "../../helpers/fetchHooks";

const CountryData = () => {
  const { data, isError, isLoading } = useCountryList();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const countryList = data.countries.map((country) => {
      return {
        value: country.name,
        label: country.name,
      };
    });

    const customSelectStyles = {
      singleValue: (provided) => ({
        ...provided,
        color: "#D69E2E",
        fontWeight: "600",
      }),
      option: (provided) => ({
        ...provided,
        color: "#D69E2E",
      }),
    };

    return (
      <Box marginY={12}>
        {/* Search Box */}
        <Heading
          fontSize="1rem"
          fontWeight="300"
          alignSelf="center"
          color="yellow.500"
          textAlign="center"
          marginBottom={4}
        >
          Search by country:
        </Heading>

        <Select
          placeholder={<Text>Select Country...</Text>}
          options={countryList}
          value={
            selectedCountry === ""
              ? null
              : { value: selectedCountry, label: selectedCountry }
          }
          styles={customSelectStyles}
          isClearable
          onChange={(input: any) =>
            input === null
              ? setSelectedCountry("")
              : setSelectedCountry(input.value)
          }
        />

        {/* Result */}
        {selectedCountry !== "" && <CountryStat country={selectedCountry} />}
      </Box>
    );
  }
};

export default CountryData;
