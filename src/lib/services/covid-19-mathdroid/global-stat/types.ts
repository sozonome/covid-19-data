import type { CategoryResponse } from "lib/services/covid-19-mathdroid/types";

export type GlobalDataResponse = {
  lastUpdate: Date | string;
} & CategoryResponse;
