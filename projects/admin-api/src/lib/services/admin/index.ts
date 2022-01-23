/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AdminAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './admin-api-client.service';
import { GuardedAdminAPIClient } from './guarded-admin-api-client.service';

export { AdminAPIClient } from './admin-api-client.service';
export { AdminAPIClientInterface } from './admin-api-client.interface';
export { GuardedAdminAPIClient } from './guarded-admin-api-client.service';

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

export interface AdminAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class AdminAPIClientModule {
  /**
   * Use this method in your root module to provide the AdminAPIClientModule
   *
   * If you are not providing
   * @param { AdminAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: AdminAPIClientModuleConfig = {}): ModuleWithProviders<AdminAPIClientModule> {
    return {
      ngModule: AdminAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: AdminAPIClient, useClass: GuardedAdminAPIClient }] : [AdminAPIClient]),
      ]
    };
  }
}
