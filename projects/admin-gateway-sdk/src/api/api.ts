export * from './api.service';
import { ApiService } from './api.service';
export * from './assets.service';
import { AssetsService } from './assets.service';
export * from './cart.service';
import { CartService } from './cart.service';
export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './country.service';
import { CountryService } from './country.service';
export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './products.service';
import { ProductsService } from './products.service';
export * from './store.service';
import { StoreService } from './store.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [ApiService, AssetsService, CartService, CategoriesService, CountryService, CustomersService, ProductsService, StoreService, UsersService];
