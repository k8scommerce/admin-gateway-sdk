/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, AssetsAPIClient } from './assets-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAssetsAPIClient extends AssetsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  upload(
    args: {
      productId: string,  // product id
      variantId: string,  // variant id
      body: models.UploadAssetRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset> {
    return super.upload(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isAsset(res) || console.error(`TypeGuard for response 'Asset' caught inconsistency.`, res)));
  }

}
