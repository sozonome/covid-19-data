import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

import { APICOVID19INDONESIA_V2_URL } from "./constants";

type FetcherArgs<ReqType, ResType> = {
  url: string;
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  data?: ReqType | AxiosRequestConfig["data"];
  method: AxiosRequestConfig["method"];
  callback?: (res: AxiosResponse<ResType>) => void;
};

export const fetcher = <ResType, ReqType = unknown>({
  url,
  params,
  method = "GET",
}: FetcherArgs<ReqType, ResType>) =>
  axios(url, { params, method, baseURL: APICOVID19INDONESIA_V2_URL }).then(
    (res: AxiosResponse<ResType>) => res.data
  );
