import { useApiCovid19IdnV2SWR } from "lib/services/apicovid19indonesia-v2/utils";

import type { INADataResponse } from "./types";

const INA_MORE_INFO_RESOURCE_PATH = "/more";

export const useINAData = () =>
  useApiCovid19IdnV2SWR<INADataResponse>({ path: INA_MORE_INFO_RESOURCE_PATH });
