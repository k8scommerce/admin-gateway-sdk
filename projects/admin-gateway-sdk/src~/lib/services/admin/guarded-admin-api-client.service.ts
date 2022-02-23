/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, AdminAPIClient } from './admin-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAdminAPIClient extends AdminAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  override getAllCategories(
    args: {
      storeId: string,
      currentPage: string,
      pageSize: string,
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllCategoriesResponse> {
    return super.getAllCategories(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetAllCategoriesResponse(res) || console.error(`TypeGuard for response 'GetAllCategoriesResponse' caught inconsistency.`, res)));
  }

  override createCategory(
    args: {
      body: models.CreateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCategoryResponse> {
    return super.createCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCreateCategoryResponse(res) || console.error(`TypeGuard for response 'CreateCategoryResponse' caught inconsistency.`, res)));
  }

  override getCategoryBySlug(
    args: {
      slug: string,  // category slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryBySlugResponse> {
    return super.getCategoryBySlug(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetCategoryBySlugResponse(res) || console.error(`TypeGuard for response 'GetCategoryBySlugResponse' caught inconsistency.`, res)));
  }

  override getCategoryById(
    args: {
      id: string,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetCategoryByIdResponse> {
    return super.getCategoryById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetCategoryByIdResponse(res) || console.error(`TypeGuard for response 'GetCategoryByIdResponse' caught inconsistency.`, res)));
  }

  override deleteCategory(
    args: {
      id: string,  // category id
      body: models.DeleteCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteCategoryResponse> {
    return super.deleteCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDeleteCategoryResponse(res) || console.error(`TypeGuard for response 'DeleteCategoryResponse' caught inconsistency.`, res)));
  }

  override updateCategory(
    args: {
      id: string,  // category id
      body: models.UpdateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UpdateCategoryResponse> {
    return super.updateCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUpdateCategoryResponse(res) || console.error(`TypeGuard for response 'UpdateCategoryResponse' caught inconsistency.`, res)));
  }

  override createCustomer(
    args: {
      body: models.CreateCustomerRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCustomerResponse> {
    return super.createCustomer(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCreateCustomerResponse(res) || console.error(`TypeGuard for response 'CreateCustomerResponse' caught inconsistency.`, res)));
  }

  override customerLogin(
    args: {
      body: models.CustomerLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CustomerLoginResponse> {
    return super.customerLogin(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCustomerLoginResponse(res) || console.error(`TypeGuard for response 'CustomerLoginResponse' caught inconsistency.`, res)));
  }

  override createProduct(
    args: {
      body: models.CreateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateProductResponse> {
    return super.createProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCreateProductResponse(res) || console.error(`TypeGuard for response 'CreateProductResponse' caught inconsistency.`, res)));
  }

  override getProductBySku(
    args: {
      sku: string,  // product sku
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    return super.getProductBySku(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetProductResponse(res) || console.error(`TypeGuard for response 'GetProductResponse' caught inconsistency.`, res)));
  }

  override getProductBySlug(
    args: {
      slug: string,  // product slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    return super.getProductBySlug(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetProductResponse(res) || console.error(`TypeGuard for response 'GetProductResponse' caught inconsistency.`, res)));
  }

  override getProductById(
    args: {
      id: string,  // product id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductResponse> {
    return super.getProductById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetProductResponse(res) || console.error(`TypeGuard for response 'GetProductResponse' caught inconsistency.`, res)));
  }

  override deleteProduct(
    args: {
      id: string,  // product id
      body: models.DeleteProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteProductResponse> {
    return super.deleteProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDeleteProductResponse(res) || console.error(`TypeGuard for response 'DeleteProductResponse' caught inconsistency.`, res)));
  }

  override updateProduct(
    args: {
      id: string,  // product id
      body: models.UpdateProductRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UpdateProductResponse> {
    return super.updateProduct(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUpdateProductResponse(res) || console.error(`TypeGuard for response 'UpdateProductResponse' caught inconsistency.`, res)));
  }

  override getProductsByCategoryId(
    args: {
      categoryId: string,  // category id
      currentPage: string,  // current page number
      pageSize: string,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetProductsByCategoryIdResponse> {
    return super.getProductsByCategoryId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetProductsByCategoryIdResponse(res) || console.error(`TypeGuard for response 'GetProductsByCategoryIdResponse' caught inconsistency.`, res)));
  }

  override getAllProducts(
    args: {
      currentPage: string,  // current page number
      pageSize: string,  // number of records per page
      sortOn: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllProductsResponse> {
    return super.getAllProducts(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetAllProductsResponse(res) || console.error(`TypeGuard for response 'GetAllProductsResponse' caught inconsistency.`, res)));
  }

  override login(
    args: {
      body: models.UserLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserLoginResponse> {
    return super.login(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUserLoginResponse(res) || console.error(`TypeGuard for response 'UserLoginResponse' caught inconsistency.`, res)));
  }

}
