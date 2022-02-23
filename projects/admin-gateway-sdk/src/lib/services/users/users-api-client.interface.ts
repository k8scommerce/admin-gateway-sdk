/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface UsersAPIClientInterface {

  /**
   * login for administration users
   * Response generated for [ 200 ] HTTP response code.
   */
  login(
    args: {
      body: models.UserLoginRequest,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserLoginResponse>;

  /**
   * returns all users
   * Response generated for [ 200 ] HTTP response code.
   */
  getAllUsers(
    args: {
      currentPage: number,  // current page number
      pageSize: number,  // number of records per page
      sortOn?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GetAllUsersResponse>;

}
