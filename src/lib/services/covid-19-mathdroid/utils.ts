import useSWR from "swr";

import type { SWRHookResponse } from "lib/types/swr";

import { fetcher } from "./fetcher";
import type { UseCovid19MathdroidSWRArgs } from "./types";

export const useCovid19MathdroidSWR = <ResType>({
  path,
  method,
  params,
  fallbackData,
}: UseCovid19MathdroidSWRArgs<ResType>): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    { url: path, method, params },
    fetcher,
    { fallbackData }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
