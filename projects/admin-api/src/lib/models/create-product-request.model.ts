/* tslint:disable */
import {
  Product,
} from '.';

export interface CreateProductRequest {
  'product:omitempty': Product;
  storeId: number;
}
