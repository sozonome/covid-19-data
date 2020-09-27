import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import Select from "react-select";

import Error from "../Error";
import Loading from "../Loading";
import INARegionStat from "../stats/INARegionStat";

import { useINAdata } from "../../helpers";

const Region = () => {
  const { data, isError, isLoading } = useINAdata();
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const regionList = data.regions.map((region) => {
      return {
        value: region.name,
        label: region.name,
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
          Search by region:
        </Heading>

        <Select
          placeholder={<Text>Select Region...</Text>}
          options={regionList}
          value={
            selectedRegion === ""
              ? null
              : { value: selectedRegion, label: selectedRegion }
          }
          styles={customSelectStyles}
          isClearable
          onChange={(input: any) =>
            input === null
              ? setSelectedRegion("")
              : setSelectedRegion(input.value)
          }
        />

        {/* Result */}
        {selectedRegion !== "" && (
          <INARegionStat selectedRegion={selectedRegion} />
        )}
      </Box>
    );
  }
};

export default Region;
