/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiAccountGetUserProfile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Account/GetUserProfile',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAccountPostUserProfile(
formData?: {
File?: Blob;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Account/PostUserProfile',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
