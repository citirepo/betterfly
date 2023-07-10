/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetSessionIdResponseGenericResponse } from '../models/GetSessionIdResponseGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookingVService {

    /**
     * @param ver 
     * @param formData 
     * @returns GetSessionIdResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiVBookingGetSessionId(
ver: string,
formData?: {
Source: string;
},
): CancelablePromise<GetSessionIdResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/booking/GetSessionId',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
