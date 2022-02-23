/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, CustomersAPIClient } from './customers-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedCustomersAPIClient extends CustomersAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  createCustomer(
    args: {
      body: models.CreateCustomerRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateCustomerResponse> {
    return super.createCustomer(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCreateCustomerResponse(res) || console.error(`TypeGuard for response 'CreateCustomerResponse' caught inconsistency.`, res)));
  }

  customerLogin(
    args: {
      body: models.CustomerLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CustomerLoginResponse> {
    return super.customerLogin(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCustomerLoginResponse(res) || console.error(`TypeGuard for response 'CustomerLoginResponse' caught inconsistency.`, res)));
  }

}
