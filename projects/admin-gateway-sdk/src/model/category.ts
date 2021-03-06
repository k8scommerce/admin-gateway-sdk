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


export interface Category { 
    /**
     *  category id
     */
    id: number;
    /**
     *  parent category id. references Category.Id
     */
    parent_id: number;
    /**
     *  slug name of the category
     */
    slug: string;
    /**
     *  name of category
     */
    name: string;
    /**
     *  description of category
     */
    description?: string;
    /**
     *  metatag title for SEO
     */
    meta_title?: string;
    /**
     *  metatag description for SEO
     */
    meta_description?: string;
    /**
     *  metatag keywords for SEO
     */
    meta_keywords?: string;
    /**
     *  category level depth
     */
    depth?: number;
    /**
     *  sort order of menu items on the same level and same parent id
     */
    sort_order?: number;
}

