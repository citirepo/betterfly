/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateCardResponseGenericResponse } from '../models/GenerateCardResponseGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AntherosService {

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAntherosGetAward(
formData?: {
Tier?: string;
AwardCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Antheros/GetAward',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAntherosBuyRedeem(
formData?: {
AwardCode?: string;
Quantity?: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Antheros/BuyRedeem',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAntherosMilesInfo(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Antheros/MilesInfo',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAntherosTransactionHistory(
formData?: {
Page?: number;
Limit?: number;
Signature?: string;
email?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Antheros/TransactionHistory',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns GenerateCardResponseGenericResponse Success
     * @throws ApiError
     */
    public static getApiAntherosGenerateCard(): CancelablePromise<GenerateCardResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Antheros/GenerateCard',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAntherosRetroClaim(
formData?: {
PNR?: string;
LastName?: string;
FlightNumber?: string;
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Antheros/RetroClaim',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
