import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const fetcherInstance = axios.create({
  baseURL: "https://disease.sh",
});

type FetcherArgs = {
  path: string;
  config?: AxiosRequestConfig;
};

export const fetcher = <ResType>({ path, config }: FetcherArgs) =>
  fetcherInstance.get<ResType>(path, config).then((res) => res.data);
