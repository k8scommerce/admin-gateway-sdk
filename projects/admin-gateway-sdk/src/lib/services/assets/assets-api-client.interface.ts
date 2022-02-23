/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface AssetsAPIClientInterface {

  /**
   * uploads an image, document, audio, video or archive asset
   * Response generated for [ 200 ] HTTP response code.
   */
  upload(
    args: {
      productId: string,  // product id
      variantId: string,  // variant id
      body: models.UploadAssetRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset>;

}
