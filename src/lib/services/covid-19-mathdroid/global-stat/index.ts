import { useCovid19MathdroidSWR } from "lib/services/covid-19-mathdroid/utils";

import type { GlobalDataResponse } from "./types";

export const useGlobalStat = () =>
  useCovid19MathdroidSWR<GlobalDataResponse>({
    path: "/",
  });
