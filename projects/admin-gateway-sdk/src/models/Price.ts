/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Price = {
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
};
