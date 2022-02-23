/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomersAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './customers-api-client.service';
import { GuardedCustomersAPIClient } from './guarded-customers-api-client.service';

export { CustomersAPIClient } from './customers-api-client.service';
export { CustomersAPIClientInterface } from './customers-api-client.interface';
export { GuardedCustomersAPIClient } from './guarded-customers-api-client.service';

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

export interface CustomersAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class CustomersAPIClientModule {
  /**
   * Use this method in your root module to provide the CustomersAPIClientModule
   *
   * If you are not providing
   * @param { CustomersAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: CustomersAPIClientModuleConfig = {}): ModuleWithProviders<CustomersAPIClientModule> {
    return {
      ngModule: CustomersAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: CustomersAPIClient, useClass: GuardedCustomersAPIClient }] : [CustomersAPIClient]),
      ]
    };
  }
}
