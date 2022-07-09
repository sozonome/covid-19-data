import type { AxiosRequestConfig } from "axios";

export type UseCovid19MathdroidSWRArgs = {
  path: string;
  method?: AxiosRequestConfig["method"];
  params?: AxiosRequestConfig["params"];
  isReady?: boolean;
};

export type CategoryData = {
  value: number;
};

export type CategoryResponse = {
  confirmed: CategoryData;
  recovered: CategoryData;
  deaths: CategoryData;
};
