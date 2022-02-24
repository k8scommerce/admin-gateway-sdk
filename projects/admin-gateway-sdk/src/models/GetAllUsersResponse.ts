/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type GetAllUsersResponse = {
    users: Array<User>;
    totalRecords: number;
    totalPages: number;
};
