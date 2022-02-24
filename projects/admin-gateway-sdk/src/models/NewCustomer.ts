/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type NewCustomer = {
    /**
     *  first name
     */
    firstName: string;
    /**
     *  last or given name
     */
    lastName: string;
    /**
     *  email address, unique per store id
     */
    email: string;
    /**
     *  password
     */
    password: string;
    /**
     *  Address object
     */
    billingAddress?: Address;
    /**
     *  Address object
     */
    shippingAddresses?: Address;
};
