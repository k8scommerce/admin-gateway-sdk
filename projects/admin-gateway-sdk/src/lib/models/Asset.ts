/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageSize } from './ImageSize';

export type Asset = {
    id: number;
    productId: number;
    variantId: number;
    name: string;
    displayName: string;
    url: string;
    kind: string;
    contentType: string;
    sortOrder: number;
    sizes: Array<ImageSize>;
};
