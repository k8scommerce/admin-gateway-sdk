/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Customer } from './Customer';
import type { ResponseStatus } from './ResponseStatus';

export type CreateCustomerResponse = {
    /**
     *  Customer object
     */
    customer: Customer;
    /**
     *  a ResponseStatus object
     */
    status: ResponseStatus;
};
