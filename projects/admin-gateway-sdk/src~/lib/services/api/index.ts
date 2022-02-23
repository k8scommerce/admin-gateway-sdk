/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-api-client.service';
import { GuardedApiAPIClient } from './guarded-api-api-client.service';

export { ApiAPIClient } from './api-api-client.service';
export { ApiAPIClientInterface } from './api-api-client.interface';
export { GuardedApiAPIClient } from './guarded-api-api-client.service';

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

export interface ApiAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ApiAPIClientModule {
  /**
   * Use this method in your root module to provide the ApiAPIClientModule
   *
   * If you are not providing
   * @param { ApiAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ApiAPIClientModuleConfig = {}): ModuleWithProviders<ApiAPIClientModule> {
    return {
      ngModule: ApiAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ApiAPIClient, useClass: GuardedApiAPIClient }] : [ApiAPIClient]),
      ]
    };
  }
}
