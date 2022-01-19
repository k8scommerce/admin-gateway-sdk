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


export interface Price { 
    /**
     *  price id
     */
    id: number;
    /**
     *  price amount
     */
    amount: number;
    /**
     *  price display amount
     */
    displayAmount: string;
    /**
     *  price compare amount
     */
    compareAtAmount: number;
    /**
     *  price display compare amount
     */
    displayCompareAtAmount: string;
    /**
     *  price currency. example: USD, CAN, etc.
     */
    currency: string;
}
