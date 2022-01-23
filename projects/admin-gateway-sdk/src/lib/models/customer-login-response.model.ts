/* tslint:disable */
import {
  Customer,
  JwtToken,
  ResponseStatus,
} from '.';

export interface CustomerLoginResponse {
  customer: Customer;  //  Customer object
  jwt: JwtToken;  //  jwt token
  status: ResponseStatus;  //  a ResponseStatus object
}
