/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import type { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import type { CustomerLoginRequest } from '../models/CustomerLoginRequest';
import type { CustomerLoginResponse } from '../models/CustomerLoginResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CustomersService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create Customer
     * creates a new customer
     * @param body  create customer
     * @returns CreateCustomerResponse A successful response.
     * @throws ApiError
     */
    public createCustomer(
        body: CreateCustomerRequest,
    ): Observable<CreateCustomerResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer',
            body: body,
        });
    }

    /**
     * Login
     * login for customers
     * @param body , requests & responses,, login
     * @returns CustomerLoginResponse A successful response.
     * @throws ApiError
     */
    public customerLogin(
        body: CustomerLoginRequest,
    ): Observable<CustomerLoginResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/login',
            body: body,
        });
    }

}