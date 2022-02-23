/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AssetsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './assets-api-client.service';
import { GuardedAssetsAPIClient } from './guarded-assets-api-client.service';

export { AssetsAPIClient } from './assets-api-client.service';
export { AssetsAPIClientInterface } from './assets-api-client.interface';
export { GuardedAssetsAPIClient } from './guarded-assets-api-client.service';

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

export interface AssetsAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class AssetsAPIClientModule {
  /**
   * Use this method in your root module to provide the AssetsAPIClientModule
   *
   * If you are not providing
   * @param { AssetsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: AssetsAPIClientModuleConfig = {}): ModuleWithProviders<AssetsAPIClientModule> {
    return {
      ngModule: AssetsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: AssetsAPIClient, useClass: GuardedAssetsAPIClient }] : [AssetsAPIClient]),
      ]
    };
  }
}
