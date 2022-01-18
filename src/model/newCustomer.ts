/**
 * Admin Gateway API
 * admin gateway api
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Address } from './address';


export interface NewCustomer { 
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
    billingAddress?: Address;
    shippingAddresses?: Address;
}

