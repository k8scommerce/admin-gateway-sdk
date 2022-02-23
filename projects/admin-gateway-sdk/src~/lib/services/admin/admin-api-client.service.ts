/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, AdminAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('AdminAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('AdminAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class AdminAPIClient implements AdminAPIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `//${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

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
  ): Observable<models.GetAllCategoriesResponse> {
    const path = `/v1/categories/${args.storeId}/${args.currentPage}/${args.pageSize}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('sortOn' in args) {
      options.params = options.params.set('sortOn', String(args.sortOn));
    }
    return this.sendRequest<models.GetAllCategoriesResponse>('GET', path, options);
  }

  /**
   * creates a category
   * Response generated for [ 200 ] HTTP response code.
   */
  createCategory(
    args: {
      body: models.CreateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCategoryResponse> {
    const path = `/v1/category`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.CreateCategoryResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * returns all categories by slug belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryBySlug(
    args: {
      slug: string,  // category slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryBySlugResponse> {
    const path = `/v1/category/slug/${args.slug}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GetCategoryBySlugResponse>('GET', path, options);
  }

  /**
   * returns all categories by id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryById(
    args: {
      id: string,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryByIdResponse> {
    const path = `/v1/category/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GetCategoryByIdResponse>('GET', path, options);
  }

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
  ): Observable<models.DeleteCategoryResponse> {
    const path = `/v1/category/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.DeleteCategoryResponse>('DELETE', path, options, JSON.stringify(args.body));
  }

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
  ): Observable<models.UpdateCategoryResponse> {
    const path = `/v1/category/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UpdateCategoryResponse>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * creates a new customer
   * Response generated for [ 200 ] HTTP response code.
   */
  createCustomer(
    args: {
      body: models.CreateCustomerRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCustomerResponse> {
    const path = `/v1/customer`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.CreateCustomerResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * login for customers
   * Response generated for [ 200 ] HTTP response code.
   */
  customerLogin(
    args: {
      body: models.CustomerLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CustomerLoginResponse> {
    const path = `/v1/customer/login`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.CustomerLoginResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * creates a product
   * Response generated for [ 200 ] HTTP response code.
   */
  createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateProductResponse> {
    const path = `/v1/product`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.CreateProductResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * returns all products by sku belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySku(
    args: {
      sku: string,  // product sku
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    const path = `/v1/product/sku/${args.sku}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GetProductResponse>('GET', path, options);
  }

  /**
   * returns matching product by slug
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductBySlug(
    args: {
      slug: string,  // product slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    const path = `/v1/product/slug/${args.slug}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GetProductResponse>('GET', path, options);
  }

  /**
   * returns matching product by id
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductById(
    args: {
      id: string,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    const path = `/v1/product/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GetProductResponse>('GET', path, options);
  }

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
  ): Observable<models.DeleteProductResponse> {
    const path = `/v1/product/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.DeleteProductResponse>('DELETE', path, options, JSON.stringify(args.body));
  }

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
  ): Observable<models.UpdateProductResponse> {
    const path = `/v1/product/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UpdateProductResponse>('PUT', path, options, JSON.stringify(args.body));
  }

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
  ): Observable<models.GetProductsByCategoryIdResponse> {
    const path = `/v1/products/${args.categoryId}/${args.currentPage}/${args.pageSize}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('sortOn' in args) {
      options.params = options.params.set('sortOn', String(args.sortOn));
    }
    return this.sendRequest<models.GetProductsByCategoryIdResponse>('GET', path, options);
  }

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
  ): Observable<models.GetAllProductsResponse> {
    const path = `/v1/products/${args.currentPage}/${args.pageSize}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('sortOn' in args) {
      options.params = options.params.set('sortOn', String(args.sortOn));
    }
    return this.sendRequest<models.GetAllProductsResponse>('GET', path, options);
  }

  /**
   * login for administration users
   * Response generated for [ 200 ] HTTP response code.
   */
  login(
    args: {
      body: models.UserLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserLoginResponse> {
    const path = `/v1/user/login`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.UserLoginResponse>('POST', path, options, JSON.stringify(args.body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
