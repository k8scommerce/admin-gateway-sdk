/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { GetAllUsersResponse } from '../models/GetAllUsersResponse';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserLoginResponse } from '../models/UserLoginResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class UsersService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Login
     * login for administration users
     * @param body , requests & responses,, login
     * @returns UserLoginResponse A successful response.
     * @throws ApiError
     */
    public login(
        body: UserLoginRequest,
    ): Observable<UserLoginResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/user/login',
            body: body,
        });
    }

    /**
     * Get Users
     * returns all users
     * @param currentPage current page number
     * @param pageSize number of records per page
     * @param sortOn
     * @returns GetAllUsersResponse A successful response.
     * @throws ApiError
     */
    public getAllUsers(
        currentPage: number,
        pageSize: number,
        sortOn?: string,
    ): Observable<GetAllUsersResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/users/{currentPage}/{pageSize}',
            path: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
            query: {
                'sortOn': sortOn,
            },
        });
    }

}