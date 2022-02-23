/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { Asset } from '../models/Asset';
import type { UploadAssetRequest } from '../models/UploadAssetRequest';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class AssetsService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Upload Asset
     * uploads an image, document, audio, video or archive asset
     * @param productId product id
     * @param variantId variant id
     * @param body
     * @returns Asset A successful response.
     * @throws ApiError
     */
    public upload(
        productId: string,
        variantId: string,
        body: UploadAssetRequest,
    ): Observable<Asset> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/asset/{productId}/{variantId}',
            path: {
                'productId': productId,
                'variantId': variantId,
            },
            body: body,
        });
    }

}