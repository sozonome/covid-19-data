import { fetcher } from "lib/services/covid-19-mathdroid/fetcher";
import { useCovid19MathdroidSWR } from "lib/services/covid-19-mathdroid/utils";

import type { CountryListResponse } from "./types";

const COUNTRY_LIST_RESOURCE_PATH = "/countries";

export const useCountryList = (fallbackData?: CountryListResponse) =>
  useCovid19MathdroidSWR<CountryListResponse>({
    path: COUNTRY_LIST_RESOURCE_PATH,
    fallbackData,
  });

export const fetchCountryList = () =>
  fetcher<CountryListResponse>({ url: COUNTRY_LIST_RESOURCE_PATH });
