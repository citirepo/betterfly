/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlagVaBcaRequest } from '../models/FlagVaBcaRequest';
import type { FlagVaBcaResponseGenericResponse } from '../models/FlagVaBcaResponseGenericResponse';
import type { InqueryVaBcaRequest } from '../models/InqueryVaBcaRequest';
import type { InqueryVaBcaResponseGenericResponse } from '../models/InqueryVaBcaResponseGenericResponse';
import type { OtpvoucherGenericResponse } from '../models/OtpvoucherGenericResponse';
import type { ServiceFeeRequestModel } from '../models/ServiceFeeRequestModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiPaymentGetAvailablePaymentChannel(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Payment/GetAvailablePaymentChannel',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentEBankingPayment(
formData?: {
PaymentType: number;
Signature: string;
PaxCount: number;
RecordLocator?: string;
UserId?: string;
IsBundling?: boolean;
PaxElderly?: number;
PaxAdult: number;
PaxChild: number;
PaxInfant: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/EBankingPayment',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentInstantPayment(
formData?: {
PaymentType: number;
PaymentKindType: number;
WalletCode?: string;
Signature: string;
PaxCount: number;
RecordLocator?: string;
UserId?: string;
PaxAdult: number;
PaxChild: number;
PaxInfant: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/InstantPayment',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentPaymentVoucher(
formData?: {
Signature?: string;
VoucherCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/PaymentVoucher',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentPaymentVoucherOtp(
formData?: {
Signature?: string;
VoucherCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/PaymentVoucherOTP',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentCreditCardPayment(
formData?: {
PaymentType: number;
PaymentKindType: number;
WalletCode?: string;
Signature: string;
PaxCount: number;
RecordLocator?: string;
UserId?: string;
PaxAdult: number;
PaxChild: number;
PaxInfant: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/CreditCardPayment',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns OtpvoucherGenericResponse Success
     * @throws ApiError
     */
    public static postApiPaymentCheckOtp(
formData?: {
KodeVoucher?: string;
OTP?: string;
},
): CancelablePromise<OtpvoucherGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/CheckOTP',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentSendOtp(
formData?: {
Signature?: string;
VoucherCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/SendOTP',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns FlagVaBcaResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiPaymentTrxFlagBcaVa(
requestBody?: FlagVaBcaRequest,
): CancelablePromise<FlagVaBcaResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/TrxFlagBcaVa',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns InqueryVaBcaResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiPaymentTrxInquiryBcaVa(
requestBody?: InqueryVaBcaRequest,
): CancelablePromise<InqueryVaBcaResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/TrxInquiryBcaVa',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiPaymentDetailServiceFee(
requestBody?: ServiceFeeRequestModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Payment/DetailServiceFee',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
