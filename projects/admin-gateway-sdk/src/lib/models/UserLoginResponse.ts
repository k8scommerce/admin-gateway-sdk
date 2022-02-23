/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JwtToken } from './JwtToken';
import type { User } from './User';

export type UserLoginResponse = {
    /**
     *  JwtToken object
     */
    jwt: JwtToken;
    /**
     *  User object
     */
    user: User;
    /**
     *  success bool
     */
    success: boolean;
};
