/* tslint:disable */
import {
  Product,
} from '.';

export interface UpdateProductRequest {
  'path:omitempty': number;
  'product:omitempty': Product;
  storeId: number;
}
