/**
 * Admin Gateway API
 * admin gateway api
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Price } from './price';


export interface Variant { 
    /**
     *  variant id
     */
    id: number;
    /**
     *  is default variant. each product must have exactly 1 default variant
     */
    is_default: boolean;
    /**
     *  variant sku. usually the product sku with appended identification tags
     */
    sku: string;
    /**
     *  variant weight. used in calculating shipping
     */
    weight?: number;
    /**
     *  variant height. used in calculating shipping
     */
    height?: number;
    /**
     *  variant width. used in calculating shipping
     */
    width?: number;
    /**
     *  variant depth. used in calculating shipping
     */
    depth?: number;
    price?: Price;
}

