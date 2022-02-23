/* tslint:disable */
import {
  Price,
} from '.';

export interface Variant {
  depth?: number;  //  variant depth. used in calculating shipping
  height?: number;  //  variant height. used in calculating shipping
  id: number;  //  variant id
  isDefault: boolean;  //  is default variant. each product must have exactly 1 default variant
  price?: Price;  //  variant Price object
  sku: string;  //  variant sku. usually the product sku with appended identification tags
  weight?: number;  //  variant weight. used in calculating shipping
  width?: number;  //  variant width. used in calculating shipping
}
