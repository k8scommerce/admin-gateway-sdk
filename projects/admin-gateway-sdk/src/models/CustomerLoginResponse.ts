/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Customer } from './Customer';
import type { JwtToken } from './JwtToken';
import type { ResponseStatus } from './ResponseStatus';

export type CustomerLoginResponse = {
    /**
     *  jwt token
     */
    jwt: JwtToken;
    /**
     *  Customer object
     */
    customer: Customer;
    /**
     *  a ResponseStatus object
     */
    status: ResponseStatus;
};
