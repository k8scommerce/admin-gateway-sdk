/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category = {
    /**
     *  category id
     */
    id: number;
    /**
     *  parent category id. references Category.Id
     */
    parentId?: number;
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
    metaTitle?: string;
    /**
     *  metatag description for SEO
     */
    metaDescription?: string;
    /**
     *  metatag keywords for SEO
     */
    metaKeywords?: string;
    /**
     *  category level depth
     */
    depth?: number;
    /**
     *  sort order of menu items on the same level and same parent id
     */
    sortOrder?: number;
};
