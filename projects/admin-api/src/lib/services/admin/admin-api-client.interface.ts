/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface AdminAPIClientInterface {

  /**
   * returns all categories belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getAllCategories(
    args: {
      storeId: string,
      currentPage: string,
      pageSize: string,
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
  ): Observable<models.CreateCategoryResponse>;

  /**
   * returns all categories by slug belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryBySlug(
    args: {
      slug: string,  // category slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryBySlugResponse>;

  /**
   * returns all categories by id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryById(
    args: {
      id: string,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryByIdResponse>;

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
  ): Observable<models.UpdateCategoryResponse>;

  /**
   * creates a new customer
   * Response generated for [ 200 ] HTTP response code.
   */
  createCustomer(
    args: {
      body: models.CreateCustomerRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCustomerResponse>;

  /**
   * login for customers
   * Response generated for [ 200 ] HTTP response code.
   */
  customerLogin(
    args: {
      body: models.CustomerLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CustomerLoginResponse>;

  /**
   * creates a product
   * Response generated for [ 200 ] HTTP response code.
   */
  createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateProductResponse>;

  /**
   * returns all products by sku belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySku(
    args: {
      sku: string,  // product sku
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse>;

  /**
   * returns matching product by slug
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySlug(
    args: {
      slug: string,  // product slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse>;

  /**
   * returns matching product by id
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductById(
    args: {
      id: string,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse>;

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
  ): Observable<models.UpdateProductResponse>;

  /**
   * returns all products by category id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductsByCategoryId(
    args: {
      categoryId: string,  // category id
      currentPage: string,  // current page number
      pageSize: string,  // number of records per page
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
      currentPage: string,  // current page number
      pageSize: string,  // number of records per page
      sortOn: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllProductsResponse>;

  /**
   * login for administration users
   * Response generated for [ 200 ] HTTP response code.
   */
  login(
    args: {
      body: models.UserLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserLoginResponse>;

}
