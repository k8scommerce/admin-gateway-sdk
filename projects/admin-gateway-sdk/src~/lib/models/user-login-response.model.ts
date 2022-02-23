/* tslint:disable */
import {
  JwtToken,
  User,
} from '.';

export interface UserLoginResponse {
  jwt: JwtToken;  //  JwtToken object
  success: boolean;  //  success bool
  user: User;  //  User object
}
