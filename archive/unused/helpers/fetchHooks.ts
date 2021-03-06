import useSWR from "swr";
import { fetcher } from "../../../src/helpers";

const PROXY_URL = `https://cors-anywhere.herokuapp.com/`;
const INDONESIA_API_URL = `https://dekontaminasi.com/api/id/covid19`;

export const useINAdata = () => {
  const { data, error } = useSWR(
    `${PROXY_URL}${INDONESIA_API_URL}/stats`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useINAHospitalData = () => {
  const { data, error } = useSWR(
    `${PROXY_URL}${INDONESIA_API_URL}/hospitals`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};