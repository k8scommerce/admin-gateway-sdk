/* tslint:disable */

export interface Address {
  city: string;  //  city name
  country: string;  //  IISO 3166-1 alpha-2 country code. https:en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
  isDefault: boolean;  //  indicates if this is a default address
  postalCode: string;  //  postal or zip code
  stateProvince: string;  //  state or province name
  street: string;  //  street name, ie: 1723 NW 23rd Ave.
}
