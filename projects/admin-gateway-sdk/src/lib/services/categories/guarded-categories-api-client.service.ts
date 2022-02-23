/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, CategoriesAPIClient } from './categories-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedCategoriesAPIClient extends CategoriesAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getAllCategories(
    args: {
      storeId: string,  // store id
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllCategoriesResponse> {
    return super.getAllCategories(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetAllCategoriesResponse(res) || console.error(`TypeGuard for response 'GetAllCategoriesResponse' caught inconsistency.`, res)));
  }

  createCategory(
    args: {
      body: models.CreateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category> {
    return super.createCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCategory(res) || console.error(`TypeGuard for response 'Category' caught inconsistency.`, res)));
  }

  getCategoryBySlug(
    args: {
      slug: string,  // category slug
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category> {
    return super.getCategoryBySlug(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCategory(res) || console.error(`TypeGuard for response 'Category' caught inconsistency.`, res)));
  }

  getCategoryById(
    args: {
      id: number,  // category id
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category> {
    return super.getCategoryById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCategory(res) || console.error(`TypeGuard for response 'Category' caught inconsistency.`, res)));
  }

  deleteCategory(
    args: {
      id: string,  // category id
      body: models.DeleteCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteCategoryResponse> {
    return super.deleteCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDeleteCategoryResponse(res) || console.error(`TypeGuard for response 'DeleteCategoryResponse' caught inconsistency.`, res)));
  }

  updateCategory(
    args: {
      id: string,  // category id
      body: models.UpdateCategoryRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Category> {
    return super.updateCategory(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCategory(res) || console.error(`TypeGuard for response 'Category' caught inconsistency.`, res)));
  }

}
