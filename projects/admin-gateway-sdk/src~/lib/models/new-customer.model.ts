/* tslint:disable */
import {
  Address,
} from '.';

export interface NewCustomer {
  billingAddress?: Address;  //  Address object
  email: string;  //  email address, unique per store id
  firstName: string;  //  first name
  lastName: string;  //  last or given name
  password: string;  //  password
  shippingAddresses?: Address;  //  Address object
}
