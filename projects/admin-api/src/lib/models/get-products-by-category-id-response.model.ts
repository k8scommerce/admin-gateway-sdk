/* tslint:disable */
import {
  Product,
} from '.';

export interface GetProductsByCategoryIdResponse {
  products: Product[];
  totalPages: number;
  totalRecords: number;
}
