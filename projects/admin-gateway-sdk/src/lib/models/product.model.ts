/* tslint:disable */
import {
  Variant,
} from '.';

export interface Product {
  description?: string;  //  category description
  id: number;  //  product id
  metaDescription?: string;  //  metatag description for SEO
  metaKeywords?: string;  //  metatag keywords for SEO
  metaTitle?: string;  //  metatag title for SEO
  name: string;  //  product name
  shortDescription?: string;  //  product short description. used in category pages
  slug: string;  //  product slug
  variants?: Variant[];  //  collection of Variant objects
}
