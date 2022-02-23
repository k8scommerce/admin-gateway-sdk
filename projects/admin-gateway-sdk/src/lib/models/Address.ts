/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Address = {
    /**
     *  street name, ie: 1723 NW 23rd Ave.
     */
    street: string;
    /**
     *  city name
     */
    city: string;
    /**
     *  state or province name
     */
    stateProvince: string;
    /**
     *  IISO 3166-1 alpha-2 country code. https:en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
     */
    country: string;
    /**
     *  postal or zip code
     */
    postalCode: string;
    /**
     *  indicates if this is a default address
     */
    isDefault: boolean;
};
