/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface ApiAPIClientInterface {

  /**
   * Ping for API up validation. On valid returns {ping: pong}
   * Response generated for [ 200 ] HTTP response code.
   */
  ping(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PingResponse>;

}
