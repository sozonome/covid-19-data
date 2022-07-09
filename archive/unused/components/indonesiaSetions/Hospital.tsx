import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import Select from "react-select";

import { useINAHospitalData } from "../../helpers/fetchHooks";
import Error from "lib/components/Error";
import Loading from "lib/components/Loading";
import MotionBox from "lib/components/motion/MotionBox";

const Hospital = () => {
  const { data, isError, isLoading } = useINAHospitalData();
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [selectedHospitalData, setSelectedHospitalData] = useState<any>();

  useEffect(() => {
    if (selectedHospital !== "" && data) {
      const hospitalData = data.filter(
        (hospital: any) => hospital.name === selectedHospital
      )[0];
      setSelectedHospitalData(hospitalData);
    }
  }, [data, selectedHospital]);

  const handleSelectChange = (input: any) =>
    input === null ? setSelectedHospital("") : setSelectedHospital(input.value);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (data) {
    const hospitalList = data.map((hospital: any) => {
      return {
        value: hospital.name,
        label: hospital.name,
      };
    });

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
          onChange={handleSelectChange}
        />

        {/* Result */}
        {selectedHospital !== "" && selectedHospitalData && (
          <MotionBox
            marginY={4}
            textAlign="center"
            textTransform="capitalize"
            initial="before"
            animate="after"
            variants={{
              before: {
                opacity: 0,
                y: 20,
                scale: 0.8,
                transition: {
                  type: "spring",
                  damping: 16,
                  stiffness: 200,
                },
              },
              after: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 16,
                  stiffness: 200,
                },
              },
            }}
          >
            <Heading fontSize="1.25rem" fontWeight="500">
              {selectedHospitalData.name}
            </Heading>
            <Box marginY={4}>
              <Text>{selectedHospitalData.address.toLowerCase()}</Text>
              <Text>{selectedHospitalData.region.toLowerCase()}</Text>
            </Box>
            {selectedHospitalData.phone !== null && (
              <Link href={`tel:${selectedHospitalData.phone}`}>
                <Button
                  leftIcon={<AiFillPhone />}
                  fontWeight="600"
                  textDecoration="underline"
                  colorScheme="pink"
                >
                  {selectedHospitalData.phone}
                </Button>
              </Link>
            )}
          </MotionBox>
        )}
      </Box>
    );
  }
  return null;
};

export default Hospital;
