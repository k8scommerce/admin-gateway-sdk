/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetProductsByCategoryIdRequest = {
    categoryId: number;
    currentPage: number;
    pageSize: number;
    filter?: string;
    sortOn?: string;
};
