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
import { Variant } from './variant';


export interface Product { 
    /**
     *  product id
     */
    id: number;
    /**
     *  product slug
     */
    slug: string;
    /**
     *  product name
     */
    name: string;
    /**
     *  product short description. used in category pages
     */
    shortDescription: string;
    /**
     *  category description
     */
    description: string;
    /**
     *  metatag title for SEO
     */
    metaTitle: string;
    /**
     *  metatag description for SEO
     */
    metaDescription: string;
    /**
     *  metatag keywords for SEO
     */
    metaKeywords: string;
    /**
     *  collection of Variant objects
     */
    variants: Array<Variant>;
}

