/* tslint:disable */
import {
  Category,
} from '.';

export interface GetAllCategoriesResponse {
  categories: Category[];  //  a collection of Category
  totalPages: number;
  totalRecords: number;
}
