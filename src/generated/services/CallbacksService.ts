/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppleCallbackModel } from '../models/AppleCallbackModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CallbacksService {

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postCallbacksSignInWithApple(
requestBody?: AppleCallbackModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Callbacks/sign_in_with_apple',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
