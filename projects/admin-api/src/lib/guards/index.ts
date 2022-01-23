/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isAddress(arg: any): arg is models.Address {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // city: string
    ( typeof arg.city === 'string' ) &&
    // country: string
    ( typeof arg.country === 'string' ) &&
    // isDefault: boolean
    ( typeof arg.isDefault === 'boolean' ) &&
    // postalCode: string
    ( typeof arg.postalCode === 'string' ) &&
    // stateProvince: string
    ( typeof arg.stateProvince === 'string' ) &&
    // street: string
    ( typeof arg.street === 'string' ) &&

  true
  );
  }

export function isCategory(arg: any): arg is models.Category {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description: string
    ( typeof arg.description === 'string' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // metaDescription: string
    ( typeof arg.metaDescription === 'string' ) &&
    // metaKeywords: string
    ( typeof arg.metaKeywords === 'string' ) &&
    // metaTitle: string
    ( typeof arg.metaTitle === 'string' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // parentId: number
    ( typeof arg.parentId === 'number' ) &&
    // slug: string
    ( typeof arg.slug === 'string' ) &&
    // sortOrder: number
    ( typeof arg.sortOrder === 'number' ) &&

  true
  );
  }

export function isCreateCategoryRequest(arg: any): arg is models.CreateCategoryRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isCreateCategoryResponse(arg: any): arg is models.CreateCategoryResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&

  true
  );
  }

export function isCreateCustomerRequest(arg: any): arg is models.CreateCustomerRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // customer: NewCustomer
    ( isNewCustomer(arg.customer) ) &&

  true
  );
  }

export function isCreateCustomerResponse(arg: any): arg is models.CreateCustomerResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // customer: Customer
    ( isCustomer(arg.customer) ) &&
    // status: ResponseStatus
    ( isResponseStatus(arg.status) ) &&

  true
  );
  }

export function isCreateProductRequest(arg: any): arg is models.CreateProductRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'product:omitempty': Product
    ( isProduct(arg['product:omitempty']) ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isCreateProductResponse(arg: any): arg is models.CreateProductResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'product:omitempty': Product
    ( isProduct(arg['product:omitempty']) ) &&

  true
  );
  }

export function isCustomer(arg: any): arg is models.Customer {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // firstName: string
    ( typeof arg.firstName === 'string' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // lastName: string
    ( typeof arg.lastName === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&

  true
  );
  }

export function isCustomerLoginRequest(arg: any): arg is models.CustomerLoginRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&

  true
  );
  }

export function isCustomerLoginResponse(arg: any): arg is models.CustomerLoginResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // customer: Customer
    ( isCustomer(arg.customer) ) &&
    // jwt: JwtToken
    ( isJwtToken(arg.jwt) ) &&
    // status: ResponseStatus
    ( isResponseStatus(arg.status) ) &&

  true
  );
  }

export function isDeleteCategoryRequest(arg: any): arg is models.DeleteCategoryRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isDeleteCategoryResponse(arg: any): arg is models.DeleteCategoryResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isDeleteProductRequest(arg: any): arg is models.DeleteProductRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'path:omitempty': number
    ( typeof arg['path:omitempty'] === 'number' ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isDeleteProductResponse(arg: any): arg is models.DeleteProductResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isGetAllCategoriesResponse(arg: any): arg is models.GetAllCategoriesResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // categories: Category[]
    ( (Array.isArray(arg.categories) && arg.categories.every((item: unknown) => isCategory(item))) ) &&
    // totalPages: number
    ( typeof arg.totalPages === 'number' ) &&
    // totalRecords: number
    ( typeof arg.totalRecords === 'number' ) &&

  true
  );
  }

export function isGetAllProductsResponse(arg: any): arg is models.GetAllProductsResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // products: Product[]
    ( (Array.isArray(arg.products) && arg.products.every((item: unknown) => isProduct(item))) ) &&
    // totalPages: number
    ( typeof arg.totalPages === 'number' ) &&
    // totalRecords: number
    ( typeof arg.totalRecords === 'number' ) &&

  true
  );
  }

export function isGetCategoryByIdResponse(arg: any): arg is models.GetCategoryByIdResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&

  true
  );
  }

export function isGetCategoryBySlugResponse(arg: any): arg is models.GetCategoryBySlugResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&

  true
  );
  }

export function isGetProductResponse(arg: any): arg is models.GetProductResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // product: Product
    ( isProduct(arg.product) ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isGetProductsByCategoryIdResponse(arg: any): arg is models.GetProductsByCategoryIdResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // products: Product[]
    ( (Array.isArray(arg.products) && arg.products.every((item: unknown) => isProduct(item))) ) &&
    // totalPages: number
    ( typeof arg.totalPages === 'number' ) &&
    // totalRecords: number
    ( typeof arg.totalRecords === 'number' ) &&

  true
  );
  }

export function isJwtToken(arg: any): arg is models.JwtToken {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // accessExpire: number
    ( typeof arg.accessExpire === 'number' ) &&
    // accessToken: string
    ( typeof arg.accessToken === 'string' ) &&
    // refreshAfter: number
    ( typeof arg.refreshAfter === 'number' ) &&

  true
  );
  }

export function isNewCustomer(arg: any): arg is models.NewCustomer {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // billingAddress?: Address
    ( typeof arg.billingAddress === 'undefined' || isAddress(arg.billingAddress) ) &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // firstName: string
    ( typeof arg.firstName === 'string' ) &&
    // lastName: string
    ( typeof arg.lastName === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&
    // shippingAddresses?: Address
    ( typeof arg.shippingAddresses === 'undefined' || isAddress(arg.shippingAddresses) ) &&

  true
  );
  }

export function isPrice(arg: any): arg is models.Price {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // amount: number
    ( typeof arg.amount === 'number' ) &&
    // compareAtAmount: number
    ( typeof arg.compareAtAmount === 'number' ) &&
    // currency: string
    ( typeof arg.currency === 'string' ) &&
    // displayAmount: string
    ( typeof arg.displayAmount === 'string' ) &&
    // displayCompareAtAmount: string
    ( typeof arg.displayCompareAtAmount === 'string' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&

  true
  );
  }

export function isProduct(arg: any): arg is models.Product {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // description: string
    ( typeof arg.description === 'string' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // metaDescription: string
    ( typeof arg.metaDescription === 'string' ) &&
    // metaKeywords: string
    ( typeof arg.metaKeywords === 'string' ) &&
    // metaTitle: string
    ( typeof arg.metaTitle === 'string' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // shortDescription: string
    ( typeof arg.shortDescription === 'string' ) &&
    // slug: string
    ( typeof arg.slug === 'string' ) &&
    // variants: Variant[]
    ( (Array.isArray(arg.variants) && arg.variants.every((item: unknown) => isVariant(item))) ) &&

  true
  );
  }

export function isResponseStatus(arg: any): arg is models.ResponseStatus {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // statusCode: number
    ( typeof arg.statusCode === 'number' ) &&
    // statusMessage: string
    ( typeof arg.statusMessage === 'string' ) &&

  true
  );
  }

export function isUpdateCategoryRequest(arg: any): arg is models.UpdateCategoryRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isUpdateCategoryResponse(arg: any): arg is models.UpdateCategoryResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category: Category
    ( isCategory(arg.category) ) &&

  true
  );
  }

export function isUpdateProductRequest(arg: any): arg is models.UpdateProductRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'path:omitempty': number
    ( typeof arg['path:omitempty'] === 'number' ) &&
    // 'product:omitempty': Product
    ( isProduct(arg['product:omitempty']) ) &&
    // storeId: number
    ( typeof arg.storeId === 'number' ) &&

  true
  );
  }

export function isUpdateProductResponse(arg: any): arg is models.UpdateProductResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // 'product:omitempty': Product
    ( isProduct(arg['product:omitempty']) ) &&

  true
  );
  }

export function isUser(arg: any): arg is models.User {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // firstName: string
    ( typeof arg.firstName === 'string' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // lastName: string
    ( typeof arg.lastName === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&

  true
  );
  }

export function isUserLoginRequest(arg: any): arg is models.UserLoginRequest {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email: string
    ( typeof arg.email === 'string' ) &&
    // password: string
    ( typeof arg.password === 'string' ) &&

  true
  );
  }

export function isUserLoginResponse(arg: any): arg is models.UserLoginResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // jwt: JwtToken
    ( isJwtToken(arg.jwt) ) &&
    // status: ResponseStatus
    ( isResponseStatus(arg.status) ) &&
    // user: User
    ( isUser(arg.user) ) &&

  true
  );
  }

export function isVariant(arg: any): arg is models.Variant {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // depth: number
    ( typeof arg.depth === 'number' ) &&
    // height: number
    ( typeof arg.height === 'number' ) &&
    // id: number
    ( typeof arg.id === 'number' ) &&
    // isDefault: boolean
    ( typeof arg.isDefault === 'boolean' ) &&
    // price: Price
    ( isPrice(arg.price) ) &&
    // sku: string
    ( typeof arg.sku === 'string' ) &&
    // weight: number
    ( typeof arg.weight === 'number' ) &&
    // width: number
    ( typeof arg.width === 'number' ) &&

  true
  );
  }


