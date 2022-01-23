/* tslint:disable */
import {
  JwtToken,
  ResponseStatus,
  User,
} from '.';

export interface UserLoginResponse {
  jwt: JwtToken;  //  JwtToken object
  status: ResponseStatus;  //  a ResponseStatus object
  user: User;  //  User object
}
