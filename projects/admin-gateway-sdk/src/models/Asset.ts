/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageSize } from './ImageSize';

export type Asset = {
    /**
     *  asset id
     */
    id: number;
    /**
     *  product id
     */
    productId: number;
    /**
     *  variant id
     */
    variantId: number;
    /**
     *  asset name
     */
    name: string;
    /**
     *  dislpay name
     */
    displayName: string;
    /**
     *  full, public access url
     */
    url: string;
    /**
     *  asset kind (image|document|audio|video|archive)
     */
    kind: string;
    /**
     *  content type (mime type)
     */
    contentType: string;
    /**
     *  sort order
     */
    sortOrder: number;
    /**
     *   ImageSize object
     */
    sizes: Array<ImageSize>;
};
