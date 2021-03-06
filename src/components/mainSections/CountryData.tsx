import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Select from "react-select";

import Error from "components/Error";
import Loading from "components/Loading";
import { CountryStat } from "components/stats";

import { useCountryList } from "helpers/fetchHooks";

const CountryData = () => {
  const { data, isError, isLoading } = useCountryList();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleSelectChange = (input: any) =>
    input === null ? setSelectedCountry("") : setSelectedCountry(input.value);

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
        color: "#4A5568",
        fontWeight: "600",
      }),
      option: (provided) => ({
        ...provided,
        color: "#4A5568",
      }),
    };

    return (
      <Box marginBottom={12} paddingX={2} flexBasis={["100%", "100%", "50%"]}>
        {/* Search Box */}
        <Heading
          fontSize="1rem"
          fontWeight="300"
          alignSelf="center"
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
          onChange={handleSelectChange}
        />

        {/* Result */}
        {selectedCountry !== "" && <CountryStat country={selectedCountry} />}
      </Box>
    );
  }
};

export default CountryData;
