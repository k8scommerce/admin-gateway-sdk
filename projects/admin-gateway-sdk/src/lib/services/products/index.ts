/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './products-api-client.service';
import { GuardedProductsAPIClient } from './guarded-products-api-client.service';

export { ProductsAPIClient } from './products-api-client.service';
export { ProductsAPIClientInterface } from './products-api-client.interface';
export { GuardedProductsAPIClient } from './guarded-products-api-client.service';

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

export interface ProductsAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ProductsAPIClientModule {
  /**
   * Use this method in your root module to provide the ProductsAPIClientModule
   *
   * If you are not providing
   * @param { ProductsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ProductsAPIClientModuleConfig = {}): ModuleWithProviders<ProductsAPIClientModule> {
    return {
      ngModule: ProductsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ProductsAPIClient, useClass: GuardedProductsAPIClient }] : [ProductsAPIClient]),
      ]
    };
  }
}
