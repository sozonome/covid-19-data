import useSWR from "swr";

import { fetcher } from "./fetcher";

const GLOBAL_API_URL = `https://covid19.mathdro.id/api`;
const PROXY_URL = `https://cors-anywhere.herokuapp.com/`;
const INDONESIA_API_URL = `https://dekontaminasi.com/api/id/covid19`;
const INDONESIA_API_URL_2 = `https://apicovid19indonesia-v2.vercel.app/api/indonesia`;

export const useGlobalStat = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}`, fetcher);

  return { data, isLoading: !error && !data, isError: error };
};

export const useCountryList = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}/countries`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useCountryStat = (countryCode: string) => {
  const { data, error } = useSWR(
    `${GLOBAL_API_URL}/countries/${countryCode}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

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

export const useINAdata2 = () => {
  const { data, error } = useSWR(`${INDONESIA_API_URL_2}/more`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
