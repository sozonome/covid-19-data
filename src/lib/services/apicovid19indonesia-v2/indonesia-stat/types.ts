type StatData = {
  positif: number;
  dirawat: number;
  sembuh: number;
  meninggal: number;
};

type TotalStatData = StatData & {
  lastUpdate: Date | string;
};

type AdditionStatData = StatData & {
  tanggal: Date | string;
  created: Date | string;
};

type MetaData = {
  odp: number;
  pdp: number;
  total_spesimen: number;
  total_spesimen_negatif: number;
};

export type INADataResponse = {
  total: TotalStatData;
  penambahan: AdditionStatData;
  data: MetaData;
};
