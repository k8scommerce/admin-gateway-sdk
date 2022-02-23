/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, ProductsAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('ProductsAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('ProductsAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class ProductsAPIClient implements ProductsAPIClientInterface {

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
   * creates a product
   * Response generated for [ 200 ] HTTP response code.
   */
  createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    const path = `/v1/product`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Product>('POST', path, options, JSON.stringify(args.body));
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
  ): Observable<models.Product> {
    const path = `/v1/product/sku/${args.sku}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Product>('GET', path, options);
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
  ): Observable<models.Product> {
    const path = `/v1/product/slug/${args.slug}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Product>('GET', path, options);
  }

  /**
   * returns matching product by id
   * Response generated for [ 200 ] HTTP response code.
   */
  getProductById(
    args: {
      id: number,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    const path = `/v1/product/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Product>('GET', path, options);
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
  ): Observable<models.Product> {
    const path = `/v1/product/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Product>('PUT', path, options, JSON.stringify(args.body));
  }

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
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      filter?: string,
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllProductsResponse> {
    const path = `/v1/products/${args.currentPage}/${args.pageSize}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('filter' in args) {
      options.params = options.params.set('filter', String(args.filter));
    }
    if ('sortOn' in args) {
      options.params = options.params.set('sortOn', String(args.sortOn));
    }
    return this.sendRequest<models.GetAllProductsResponse>('GET', path, options);
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
