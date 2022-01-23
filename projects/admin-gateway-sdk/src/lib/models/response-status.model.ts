/* tslint:disable */

export interface ResponseStatus {
  statusCode: number;  //  RFC http status code, ie. 204, etc - https:go.dev/src/net/http/status.go
  statusMessage: string;  //  status message
}
