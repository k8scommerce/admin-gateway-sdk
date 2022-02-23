/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface CategoriesAPIClientInterface {

  /**
   * returns all categories belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getAllCategories(
    args: {
      storeId: string,  // store id
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllCategoriesResponse>;

  /**
   * creates a category
   * Response generated for [ 200 ] HTTP response code.
   */
  createCategory(
    args: {
      body: models.CreateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category>;

  /**
   * returns all categories by slug belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryBySlug(
    args: {
      slug: string,  // category slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category>;

  /**
   * returns all categories by id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryById(
    args: {
      id: number,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category>;

  /**
   * deletes a category
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteCategory(
    args: {
      id: string,  // category id
      body: models.DeleteCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteCategoryResponse>;

  /**
   * updates a category
   * Response generated for [ 200 ] HTTP response code.
   */
  updateCategory(
    args: {
      id: string,  // category id
      body: models.UpdateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category>;

}
