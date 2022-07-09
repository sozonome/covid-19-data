type CountryItem = {
  name: string;
  iso2: string;
  iso3: string;
};

export type CountryListResponse = {
  countries: Array<CountryItem>;
};
