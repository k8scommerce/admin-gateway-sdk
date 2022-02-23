/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type CustomerAccount = {
    /**
     *  customer id
     */
    id: number;
    /**
     *  Address object
     */
    billingAddress: Address;
    /**
     *  collection of Address objects
     */
    shippingAddresses: Array<Address>;
};
