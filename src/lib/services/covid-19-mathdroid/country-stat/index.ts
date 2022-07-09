import { useCovid19MathdroidSWR } from "lib/services/covid-19-mathdroid/utils";

import type { CountryStatResponse } from "./types";

const COUNTRY_RESOURCE_PATH = "/countries";

export const useCountryStat = (countryCode: string) =>
  useCovid19MathdroidSWR<CountryStatResponse>({
    path: `${COUNTRY_RESOURCE_PATH}/${countryCode}`,
  });
