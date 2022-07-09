import { fetcher } from "lib/services/apicovid19indonesia-v2/fetcher";
import { useApiCovid19IdnV2SWR } from "lib/services/apicovid19indonesia-v2/utils";

import type { INADataResponse } from "./types";

const INA_MORE_INFO_RESOURCE_PATH = "/more";

export const useINAData = (fallbackData?: INADataResponse) =>
  useApiCovid19IdnV2SWR<INADataResponse>({
    path: INA_MORE_INFO_RESOURCE_PATH,
    fallbackData,
  });

export const fetchINAData = () =>
  fetcher<INADataResponse>({ url: INA_MORE_INFO_RESOURCE_PATH });
