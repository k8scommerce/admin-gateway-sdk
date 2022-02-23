/* tslint:disable */

export interface Category {
  depth?: number;  //  category level depth
  description?: string;  //  description of category
  id: number;  //  category id
  metaDescription?: string;  //  metatag description for SEO
  metaKeywords?: string;  //  metatag keywords for SEO
  metaTitle?: string;  //  metatag title for SEO
  name: string;  //  name of category
  parentId?: number;  //  parent category id. references Category.Id
  slug: string;  //  slug name of the category
  sortOrder?: number;  //  sort order of menu items on the same level and same parent id
}
