import { useCovid19MathdroidSWR } from "lib/services/covid-19-mathdroid/utils";

import type { CountryListResponse } from "./types";

const COUNTRY_LIST_RESOURCE_PATH = "/countries";

export const useCountryList = () =>
  useCovid19MathdroidSWR<CountryListResponse>({
    path: COUNTRY_LIST_RESOURCE_PATH,
  });
