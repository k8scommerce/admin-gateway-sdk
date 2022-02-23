/* tslint:disable */

export interface Price {
  amount: number;  //  price amount
  compareAtAmount?: number;  //  price compare amount
  currency?: string;  //  price currency. example: USD, CAN, etc.
  displayAmount: string;  //  price display amount
  displayCompareAtAmount?: string;  //  price display compare amount
  id?: number;  //  price id
}
