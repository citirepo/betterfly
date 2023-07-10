/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VoucherService {

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVoucherGetVoucherInfo(
formData?: {
Signature?: string;
OverrideRestrictions?: boolean;
VoucherReference?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Voucher/GetVoucherInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVoucherVoucherInfo(
formData?: {
VoucherReference?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Voucher/VoucherInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
