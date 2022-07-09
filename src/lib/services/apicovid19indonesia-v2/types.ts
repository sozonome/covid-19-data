import type { AxiosRequestConfig } from "axios";

export type UseApiCovid19IdnV2SWR<ResType> = {
  path: string;
  method?: AxiosRequestConfig["method"];
  params?: AxiosRequestConfig["params"];
  isReady?: boolean;
  fallbackData?: ResType;
};
