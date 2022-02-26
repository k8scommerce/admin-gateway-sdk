/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Asset = {
    /**
     *  asset id
     */
    id?: number;
    /**
     *  product id
     */
    productId?: number;
    /**
     *  variant id
     */
    variantId?: number;
    /**
     *  asset name
     */
    name?: string;
    /**
     *  display name
     */
    displayName?: string;
    /**
     *  full, public access url
     */
    url?: string;
    /**
     *  asset kind (0=unknown|1=image|2=document|3=audio|4=video|5=archive)
     */
    kind?: number;
    /**
     *  content type (mime type)
     */
    contentType?: string;
    /**
     *  sort order
     */
    sortOrder?: number;
    /**
     *  map[tag:string]url:string
     */
    sizes?: any;
};
