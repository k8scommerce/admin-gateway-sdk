/* tslint:disable */
import {
  Customer,
  ResponseStatus,
} from '.';

export interface CreateCustomerResponse {
  customer: Customer;  //  Customer object
  status: ResponseStatus;  //  a ResponseStatus object
}
