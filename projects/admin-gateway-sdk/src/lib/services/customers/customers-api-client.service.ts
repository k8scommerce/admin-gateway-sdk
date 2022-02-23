/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, CustomersAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('CustomersAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('CustomersAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class CustomersAPIClient implements CustomersAPIClientInterface {

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
