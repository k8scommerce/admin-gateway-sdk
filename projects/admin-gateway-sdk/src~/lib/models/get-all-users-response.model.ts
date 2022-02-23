/* tslint:disable */
import {
  User,
} from '.';

export interface GetAllUsersResponse {
  totalPages: number;
  totalRecords: number;
  users: User[];
}
