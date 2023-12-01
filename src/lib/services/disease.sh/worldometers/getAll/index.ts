import { useAppSWR } from "lib/services/disease.sh/hooks";

import type { GetAllDataResponse } from "./types";

export const useGetAllData = () =>
  useAppSWR<GetAllDataResponse>({
    path: "/v3/covid-19/all",
  });
