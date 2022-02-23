/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, UsersAPIClient } from './users-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedUsersAPIClient extends UsersAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  login(
    args: {
      body: models.UserLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserLoginResponse> {
    return super.login(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUserLoginResponse(res) || console.error(`TypeGuard for response 'UserLoginResponse' caught inconsistency.`, res)));
  }

  getAllUsers(
    args: {
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllUsersResponse> {
    return super.getAllUsers(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isGetAllUsersResponse(res) || console.error(`TypeGuard for response 'GetAllUsersResponse' caught inconsistency.`, res)));
  }

}
