import type { AxiosRequestConfig } from "axios";

export type UseCovid19MathdroidSWRArgs<ResType> = {
  path: string;
  method?: AxiosRequestConfig["method"];
  params?: AxiosRequestConfig["params"];
  isReady?: boolean;
  fallbackData?: ResType;
};

export type CategoryData = {
  value: number;
};

export type CategoryResponse = {
  confirmed: CategoryData;
  recovered: CategoryData;
  deaths: CategoryData;
};
