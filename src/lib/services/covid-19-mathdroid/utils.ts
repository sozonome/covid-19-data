import useSWR from "swr";

import type { SWRHookResponse } from "lib/types/swr";

import { fetcher } from "./fetcher";
import type { UseCovid19MathdroidSWRArgs } from "./types";

export const useCovid19MathdroidSWR = <ResType>({
  path,
  method,
  isReady,
}: UseCovid19MathdroidSWRArgs): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    isReady ? { path, method } : null,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
