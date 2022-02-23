/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResponseStatus = {
    /**
     *  RFC http status code, ie. 204, etc - https:go.dev/src/net/http/status.go
     */
    statusCode: number;
    /**
     *  status message
     */
    statusMessage: string;
};
