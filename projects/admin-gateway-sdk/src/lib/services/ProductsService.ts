/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { CreateProductRequest } from '../models/CreateProductRequest';
import type { DeleteProductRequest } from '../models/DeleteProductRequest';
import type { DeleteProductResponse } from '../models/DeleteProductResponse';
import type { GetAllProductsResponse } from '../models/GetAllProductsResponse';
import type { GetProductsByCategoryIdResponse } from '../models/GetProductsByCategoryIdResponse';
import type { Product } from '../models/Product';
import type { UpdateProductRequest } from '../models/UpdateProductRequest';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class ProductsService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create Product
     * creates a product
     * @param body
     * @returns Product A successful response.
     * @throws ApiError
     */
    public createProduct(
        body: CreateProductRequest,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/product',
            body: body,
        });
    }

    /**
     * Get Product By Sku
     * returns all products by sku belonging to a store
     * @param sku product sku
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductBySku(
        sku: string,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/sku/{sku}',
            path: {
                'sku': sku,
            },
        });
    }

    /**
     * Get Product By Slug
     * returns matching product by slug
     * @param slug product slug
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductBySlug(
        slug: string,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/slug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * Get Product By Id
     * returns matching product by id
     * @param id product id
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductById(
        id: number,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete Product
     * delete a product
     * @param id product id
     * @param body
     * @returns DeleteProductResponse A successful response.
     * @throws ApiError
     */
    public deleteProduct(
        id: string,
        body: DeleteProductRequest,
    ): Observable<DeleteProductResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/product/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

    /**
     * Update Product
     * updates a product
     * @param id product id
     * @param body
     * @returns Product A successful response.
     * @throws ApiError
     */
    public updateProduct(
        id: string,
        body: UpdateProductRequest,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/product/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

    /**
     * Get Products By Category Id
     * returns all products by category id belonging to a store
     * @param categoryId category id
     * @param currentPage current page number
     * @param pageSize number of records per page
     * @param sortOn
     * @returns GetProductsByCategoryIdResponse A successful response.
     * @throws ApiError
     */
    public getProductsByCategoryId(
        categoryId: number,
        currentPage: number,
        pageSize: number,
        sortOn?: string,
    ): Observable<GetProductsByCategoryIdResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/products/{categoryId}/{currentPage}/{pageSize}',
            path: {
                'categoryId': categoryId,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
            query: {
                'sortOn': sortOn,
            },
        });
    }

    /**
     * Get All Products
     * returns all products belonging to a store
     * @param currentPage current page number
     * @param pageSize number of records per page
     * @param filter
     * @param sortOn
     * @returns GetAllProductsResponse A successful response.
     * @throws ApiError
     */
    public getAllProducts(
        currentPage: number,
        pageSize: number,
        filter?: string,
        sortOn?: string,
    ): Observable<GetAllProductsResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/products/{currentPage}/{pageSize}',
            path: {
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
            query: {
                'filter': filter,
                'sortOn': sortOn,
            },
        });
    }

}