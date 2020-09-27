import { useEffect, useState } from "react";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/core";
import Select from "react-select";

import Error from "../Error";
import Loading from "../Loading";

import { useINAHospitalData } from "../../helpers";

const Hospital = () => {
  const { data, isError, isLoading } = useINAHospitalData();
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [selectedHospitalData, setSelectedHospitalData] = useState(null);

  useEffect(() => {
    if (selectedHospital !== "" && data) {
      const hospitalData = data.filter(
        (hospital) => hospital.name === selectedHospital
      )[0];
      setSelectedHospitalData(hospitalData);
    }
  }, [selectedHospital]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const hospitalList = data.map((hospital) => {
      return {
        value: hospital.name,
        label: hospital.name,
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
          Search Hospital:
        </Heading>

        <Select
          placeholder={<Text>Select Hospital...</Text>}
          options={hospitalList}
          value={
            selectedHospital === ""
              ? null
              : { value: selectedHospital, label: selectedHospital }
          }
          styles={customSelectStyles}
          isClearable
          onChange={(input: any) =>
            input === null
              ? setSelectedHospital("")
              : setSelectedHospital(input.value)
          }
        />

        {/* Result */}
        {selectedHospital !== "" && selectedHospitalData && (
          <Box marginY={4} textAlign="center" textTransform="capitalize">
            <Heading fontSize="1.25rem" fontWeight="500">
              {selectedHospitalData.name}
            </Heading>
            <Box marginY={4}>
              <Text>{selectedHospitalData.address.toLowerCase()}</Text>
              <Text>{selectedHospitalData.region.toLowerCase()}</Text>
            </Box>
            <Link href={`tel:${selectedHospitalData.phone}`}>
              <Button
                color="orange.600"
                leftIcon="phone"
                fontWeight="600"
                textDecoration="underline"
              >
                {selectedHospitalData.phone}
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    );
  }
};

export default Hospital;
