import useSWR from "swr";

import { fetcher } from "./fetcher";

const GLOBAL_API_URL = `https://covid19.mathdro.id/api`;
const INDONESIA_API_URL = `https://dekontaminasi.com/api/id/covid19`;

export const useGlobalStat = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}`, fetcher);

  return { data, isLoading: !error && !data, isError: error };
};

export const useCountryStat = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}/countries`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useINAdata = () => {
  const { data, error } = useSWR(`${INDONESIA_API_URL}/stats`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
