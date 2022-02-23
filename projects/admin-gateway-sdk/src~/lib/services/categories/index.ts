/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CategoriesAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './categories-api-client.service';
import { GuardedCategoriesAPIClient } from './guarded-categories-api-client.service';

export { CategoriesAPIClient } from './categories-api-client.service';
export { CategoriesAPIClientInterface } from './categories-api-client.interface';
export { GuardedCategoriesAPIClient } from './guarded-categories-api-client.service';

/**
 * provided options, headers and params will be used as default for each request
 */
export interface DefaultHttpOptions {
  headers?: {[key: string]: string};
  params?: {[key: string]: string};
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface CategoriesAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class CategoriesAPIClientModule {
  /**
   * Use this method in your root module to provide the CategoriesAPIClientModule
   *
   * If you are not providing
   * @param { CategoriesAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: CategoriesAPIClientModuleConfig = {}): ModuleWithProviders<CategoriesAPIClientModule> {
    return {
      ngModule: CategoriesAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: CategoriesAPIClient, useClass: GuardedCategoriesAPIClient }] : [CategoriesAPIClient]),
      ]
    };
  }
}
