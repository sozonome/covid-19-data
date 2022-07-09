import { fetcher } from "lib/services/covid-19-mathdroid/fetcher";
import { useCovid19MathdroidSWR } from "lib/services/covid-19-mathdroid/utils";

import type { GlobalDataResponse } from "./types";

export const useGlobalStat = (fallbackData?: GlobalDataResponse) =>
  useCovid19MathdroidSWR<GlobalDataResponse>({
    path: "/",
    fallbackData,
  });

export const fetchGlobalStat = () => fetcher<GlobalDataResponse>({ url: "/" });
