/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, CategoriesAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('CategoriesAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('CategoriesAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class CategoriesAPIClient implements CategoriesAPIClientInterface {

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
      storeId: string,  // store id
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
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
  ): Observable<models.Category> {
    const path = `/v1/category`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Category>('POST', path, options, JSON.stringify(args.body));
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
  ): Observable<models.Category> {
    const path = `/v1/category/slug/${args.slug}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Category>('GET', path, options);
  }

  /**
   * returns all categories by id belonging to a store
   * Response generated for [ 200 ] HTTP response code.
   */
  getCategoryById(
    args: {
      id: number,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category> {
    const path = `/v1/category/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Category>('GET', path, options);
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
  ): Observable<models.Category> {
    const path = `/v1/category/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Category>('PUT', path, options, JSON.stringify(args.body));
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
