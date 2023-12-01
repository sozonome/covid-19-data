import type { AxiosRequestConfig } from "axios";
import type { SWRConfiguration } from "swr";
import useSWR from "swr";

import { fetcher } from "./fetcher";

const swrOptions: SWRConfiguration = {
  shouldRetryOnError: false,
  revalidateOnMount: true,
  revalidateOnReconnect: false,
  revalidateOnFocus: false,
  revalidateIfStale: true,
};

type UseAppSWRArgs<ResType> = {
  path: string;
  config?: AxiosRequestConfig;
  fallbackData?: ResType;
  isReady?: boolean;
};

export const useAppSWR = <ResType, ErrorType = unknown>({
  path,
  config,
  fallbackData,
  isReady = true,
}: UseAppSWRArgs<ResType>) => {
  const { data, error, mutate } = useSWR<ResType, ErrorType>(
    isReady ? { path, config } : null,
    fetcher,
    {
      ...swrOptions,
      fallbackData,
    }
  );

  return {
    data,
    isLoading: !error && !data && isReady,
    isError: error,
    mutate,
  };
};
