import { Box, Heading, Select } from "@chakra-ui/core";
import { useState } from "react";
import { useCountryList } from "../helpers/fetchHooks";
import Error from "./Error";
import Loading from "./Loading";
import CountryStat from "./stats/CountryStat";
import LocalStat from "./stats/LocalStat";

const CountryData = () => {
  const { data, isError, isLoading } = useCountryList();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box marginY={12}>
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
        color="gray.700"
        backgroundColor="gray.300"
        placeholder="Select Country"
        fontWeight="semibold"
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
        value={selectedCountry}
      >
        {data.countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </Select>
      {selectedCountry !== "" && <CountryStat country={selectedCountry} />}
    </Box>
  );
};

export default CountryData;
