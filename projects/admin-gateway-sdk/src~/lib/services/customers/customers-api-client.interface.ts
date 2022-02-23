/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface CustomersAPIClientInterface {

  /**
   * creates a new customer
   * Response generated for [ 200 ] HTTP response code.
   */
  createCustomer(
    args: {
      body: models.CreateCustomerRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCustomerResponse>;

  /**
   * login for customers
   * Response generated for [ 200 ] HTTP response code.
   */
  customerLogin(
    args: {
      body: models.CustomerLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CustomerLoginResponse>;

}
