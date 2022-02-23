/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';

export type GetAllCategoriesResponse = {
    /**
     *  a collection of Category
     */
    categories: Array<Category>;
    totalRecords: number;
    totalPages: number;
};
