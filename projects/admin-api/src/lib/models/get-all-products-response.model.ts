/* tslint:disable */
import {
  Product,
} from '.';

export interface GetAllProductsResponse {
  products: Product[];
  totalPages: number;
  totalRecords: number;
}
