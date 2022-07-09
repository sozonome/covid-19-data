import useSWR from "swr";

import type { SWRHookResponse } from "lib/types/swr";

import { fetcher } from "./fetcher";
import type { UseApiCovid19IdnV2SWR } from "./types";

export const useApiCovid19IdnV2SWR = <ResType>({
  path,
  method,
  params,
}: UseApiCovid19IdnV2SWR): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    { url: path, method, params },
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
