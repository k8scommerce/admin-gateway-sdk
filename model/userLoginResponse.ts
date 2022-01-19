/**
 * Admin Gateway API
 * admin gateway api
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JwtToken } from './jwtToken';
import { User } from './user';
import { ResponseStatus } from './responseStatus';


export interface UserLoginResponse { 
    jwt: JwtToken;
    user: User;
    status: ResponseStatus;
}

