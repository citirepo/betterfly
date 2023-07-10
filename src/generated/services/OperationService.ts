/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckInPaxListReponseGenericResponse } from '../models/CheckInPaxListReponseGenericResponse';
import type { CheckInPaxListRequest } from '../models/CheckInPaxListRequest';
import type { CustomBoardingPassRequest } from '../models/CustomBoardingPassRequest';
import type { CustomBoardingPassResponseGenericResponse } from '../models/CustomBoardingPassResponseGenericResponse';
import type { RequestCheckInPax } from '../models/RequestCheckInPax';
import type { ResponseCheckInPaxGenericResponse } from '../models/ResponseCheckInPaxGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OperationService {

    /**
     * @param requestBody 
     * @returns ResponseCheckInPaxGenericResponse Success
     * @throws ApiError
     */
    public static postApiOperationCheckinPax(
requestBody?: RequestCheckInPax,
): CancelablePromise<ResponseCheckInPaxGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Operation/checkin-pax',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns CheckInPaxListReponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiOperationCheckinPaxList(
requestBody?: CheckInPaxListRequest,
): CancelablePromise<CheckInPaxListReponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Operation/checkin-pax-list',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns CustomBoardingPassResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiOperationBoardingPass(
requestBody?: CustomBoardingPassRequest,
): CancelablePromise<CustomBoardingPassResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Operation/BoardingPass',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
