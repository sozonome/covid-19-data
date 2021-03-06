import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Select from "react-select";

import Error from "components/Error";
import Loading from "components/Loading";
import INARegionStat from "../stats/INARegionStat";

import { useINAdata } from "../../helpers/fetchHooks";

const Region = () => {
  const { data, isError, isLoading } = useINAdata();
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const handleSelectChange = (input: any) =>
    input === null ? setSelectedRegion("") : setSelectedRegion(input.value);

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
        color: "#4A5568",
        fontWeight: "600",
      }),
      option: (provided) => ({
        ...provided,
        color: "#4A5568",
      }),
    };

    return (
      <Box marginY={12} paddingX={2}>
        {/* Search Box */}
        <Heading
          fontSize="1rem"
          fontWeight="300"
          alignSelf="center"
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
          onChange={handleSelectChange}
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
