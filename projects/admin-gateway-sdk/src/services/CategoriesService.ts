/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { Category } from '../models/Category';
import type { CreateCategoryRequest } from '../models/CreateCategoryRequest';
import type { DeleteCategoryRequest } from '../models/DeleteCategoryRequest';
import type { DeleteCategoryResponse } from '../models/DeleteCategoryResponse';
import type { GetAllCategoriesResponse } from '../models/GetAllCategoriesResponse';
import type { UpdateCategoryRequest } from '../models/UpdateCategoryRequest';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CategoriesService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Get All Categories
     * returns all categories belonging to a store
     * @returns GetAllCategoriesResponse A successful response.
     * @throws ApiError
     */
    public getAllCategories(): Observable<GetAllCategoriesResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/categories',
        });
    }

    /**
     * Create Category
     * creates a category
     * @param body  create category
     * @returns Category A successful response.
     * @throws ApiError
     */
    public createCategory(
        body: CreateCategoryRequest,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/category',
            body: body,
        });
    }

    /**
     * Get Category By Slug
     * returns all categories by slug belonging to a store
     * @param slug category slug
     * @returns Category A successful response.
     * @throws ApiError
     */
    public getCategoryBySlug(
        slug: string,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/category/slug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * Get Category By Id
     * returns all categories by id belonging to a store
     * @param id category id
     * @returns Category A successful response.
     * @throws ApiError
     */
    public getCategoryById(
        id: number,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/category/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete Category
     * deletes a category
     * @param id category id
     * @param body  delete category
     * @returns DeleteCategoryResponse A successful response.
     * @throws ApiError
     */
    public deleteCategory(
        id: string,
        body: DeleteCategoryRequest,
    ): Observable<DeleteCategoryResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/category/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

    /**
     * Update Category
     * updates a category
     * @param id category id
     * @param body  update category
     * @returns Category A successful response.
     * @throws ApiError
     */
    public updateCategory(
        id: string,
        body: UpdateCategoryRequest,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/category/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

}