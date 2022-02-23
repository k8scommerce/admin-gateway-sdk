/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, ApiAPIClient } from './api-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedApiAPIClient extends ApiAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  ping(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PingResponse> {
    return super.ping(requestHttpOptions)
      .pipe(tap((res: any) => guards.isPingResponse(res) || console.error(`TypeGuard for response 'PingResponse' caught inconsistency.`, res)));
  }

}
