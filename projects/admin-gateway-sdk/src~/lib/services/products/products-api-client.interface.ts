/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface ProductsAPIClientInterface {

  /**
   * creates a product
   * Response generated for [ 200 ] HTTP response code.
   */
  createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product>;

  /**
   * returns all products by sku belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySku(
    args: {
      sku: string,  // product sku
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product>;

  /**
   * returns matching product by slug
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySlug(
    args: {
      slug: string,  // product slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product>;

  /**
   * returns matching product by id
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductById(
    args: {
      id: number,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product>;

  /**
   * delete a product
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteProduct(
    args: {
      id: string,  // product id
      body: models.DeleteProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteProductResponse>;

  /**
   * updates a product
   * Response generated for [ 200 ] HTTP response code.
   */
  updateProduct(
    args: {
      id: string,  // product id
      body: models.UpdateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product>;

  /**
   * returns all products by category id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductsByCategoryId(
    args: {
      categoryId: number,  // category id
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductsByCategoryIdResponse>;

  /**
   * returns all products belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getAllProducts(
    args: {
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      filter?: string,
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllProductsResponse>;

}
