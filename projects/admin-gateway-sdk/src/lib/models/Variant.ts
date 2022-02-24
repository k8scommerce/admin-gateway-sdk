/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Price } from './Price';

export type Variant = {
    /**
     *  variant id
     */
    id: number;
    /**
     *  is default variant. each product must have exactly 1 default variant
     */
    isDefault: boolean;
    /**
     *  variant sku. usually the product sku with appended identification tags
     */
    sku: string;
    /**
     *  variant weight. used in calculating shipping
     */
    weight: number;
    /**
     *  variant height. used in calculating shipping
     */
    height: number;
    /**
     *  variant width. used in calculating shipping
     */
    width: number;
    /**
     *  variant depth. used in calculating shipping
     */
    depth: number;
    /**
     *  variant Price object
     */
    price: Price;
};
