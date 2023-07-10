/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkorsService {

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiSkorsLogonSkors(
formData?: {
username?: string;
password?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Skors/LogonSkors',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiSkorsRegisSkor(
formData?: {
Email?: string;
first_name?: string;
MiddleName?: string;
last_name?: string;
ReferralCode?: string;
Gender?: string;
PhoneNumber?: string;
DOB?: string;
Organization?: number;
Password1?: string;
Password2?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Skors/RegisSkor',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiSkorsRenewal(
formData?: {
Signature?: string;
User?: number;
Membership?: number;
membership_category?: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Skors/Renewal',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiSkorsSetMembership(
formData?: {
Signature?: string;
User?: number;
Membership?: number;
membership_category?: number;
IsRenewal?: boolean;
PromoCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Skors/SetMembership',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsMembershipCategory(
id?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/MembershipCategory',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsMembershipList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/MembershipList',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsGetUserById(
id?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/GetUserById',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsGetFeedList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/GetFeedList',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsGetEventList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/GetEventList',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiSkorsListPnrSkors(
formData?: {
Email?: string;
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Skors/ListPnrSkors',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param code 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSkorsGetPromoDetail(
code?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Skors/GetPromoDetail',
            query: {
                'code': code,
            },
        });
    }

}
