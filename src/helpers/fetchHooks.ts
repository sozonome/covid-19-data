import useSWR from "swr";

import { fetcher } from "./fetcher";

import { GLOBAL_API_URL, INDONESIA_API_URL } from "../constants/API_URL";

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
