/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';

export type GetAllProductsResponse = {
    products: Array<Product>;
    totalRecords: number;
    totalPages: number;
};
