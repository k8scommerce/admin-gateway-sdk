/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { PingResponse } from '../models/PingResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class ApiService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Ping
     * Ping for API up validation. On valid returns {ping: pong}
     * @returns PingResponse A successful response.
     * @throws ApiError
     */
    public ping(): Observable<PingResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/api/ping',
        });
    }

}