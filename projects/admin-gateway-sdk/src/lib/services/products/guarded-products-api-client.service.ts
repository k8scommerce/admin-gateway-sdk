/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, ProductsAPIClient } from './products-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedProductsAPIClient extends ProductsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    return super.createProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isProduct(res) || console.error(`TypeGuard for response 'Product' caught inconsistency.`, res)));
  }

  getProductBySku(
    args: {
      sku: string,  // product sku
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    return super.getProductBySku(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isProduct(res) || console.error(`TypeGuard for response 'Product' caught inconsistency.`, res)));
  }

  getProductBySlug(
    args: {
      slug: string,  // product slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    return super.getProductBySlug(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isProduct(res) || console.error(`TypeGuard for response 'Product' caught inconsistency.`, res)));
  }

  getProductById(
    args: {
      id: number,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    return super.getProductById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isProduct(res) || console.error(`TypeGuard for response 'Product' caught inconsistency.`, res)));
  }

  deleteProduct(
    args: {
      id: string,  // product id
      body: models.DeleteProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteProductResponse> {
    return super.deleteProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDeleteProductResponse(res) || console.error(`TypeGuard for response 'DeleteProductResponse' caught inconsistency.`, res)));
  }

  updateProduct(
    args: {
      id: string,  // product id
      body: models.UpdateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Product> {
    return super.updateProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isProduct(res) || console.error(`TypeGuard for response 'Product' caught inconsistency.`, res)));
  }

  getProductsByCategoryId(
    args: {
      categoryId: number,  // category id
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductsByCategoryIdResponse> {
    return super.getProductsByCategoryId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetProductsByCategoryIdResponse(res) || console.error(`TypeGuard for response 'GetProductsByCategoryIdResponse' caught inconsistency.`, res)));
  }

  getAllProducts(
    args: {
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      filter?: string,
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllProductsResponse> {
    return super.getAllProducts(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetAllProductsResponse(res) || console.error(`TypeGuard for response 'GetAllProductsResponse' caught inconsistency.`, res)));
  }

}
