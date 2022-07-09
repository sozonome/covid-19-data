/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import type { SingleValue } from "react-select";
import Select from "react-select";

import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import { CountryStat } from "lib/components/stats";
import { useCountryList } from "lib/services/covid-19-mathdroid/country-list";

const CountryData = () => {
  const { data, isError, isLoading } = useCountryList();
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");

  const handleSelectChange = (
    input: SingleValue<{ value: string; label: string }>
  ) => {
    if (!input) {
      setSelectedCountry("");
      return;
    }
    setSelectedCountry(input.value);
  };

  const countryList = React.useMemo(
    () =>
      data?.countries.map((country) => {
        return {
          value: country.name,
          label: country.name,
        };
      }),
    [data?.countries]
  );

  const customSelectStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#4A5568",
      fontWeight: "600",
    }),
    option: (provided: any) => ({
      ...provided,
      color: "#4A5568",
    }),
  };

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

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
};

export default CountryData;
