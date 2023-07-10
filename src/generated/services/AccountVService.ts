/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourceModelOld } from '../models/SourceModelOld';
import type { SyncMemberModel } from '../models/SyncMemberModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountVService {

    /**
     * @param type 
     * @param ver 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiVAccountProfileantheros(
type: string,
ver: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v{ver}/account/profileantheros/{type}',
            path: {
                'type': type,
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountProfileUpdate(
ver: string,
formData?: {
Title: string;
FirstName: string;
LastName: string;
Gender: string;
Dob: string;
Pob?: string;
IdentityType: string;
IdentityNo: string;
Address: string;
Country: string;
Job?: string;
Hobby?: string;
City: string;
Nationality: string;
State: string;
ZipCode?: string;
PhoneNo: string;
Education: string;
PhoneNoCode: string;
Source: string;
PassportExpiredDate?: string;
PassportIssueDate?: string;
PassportIssuedCountry?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/profile/update',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountSignupSimple(
ver: string,
formData?: {
Email: string;
Password: string;
ConfirmPassword: string;
FirstName: string;
LastName: string;
Title: string;
Gender: string;
Dob?: string;
IsSubscriber?: boolean;
IsLoyalty?: boolean;
OrganizationCode?: string;
Referral?: string;
Source: string;
PhoneNoCode: string;
PhoneNo: string;
IdentityType?: number;
IdentityNo?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/signup-simple',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param userId 
     * @param token 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiVAccountActivateEmail(
ver: string,
userId: string = '',
token: string = '',
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v{ver}/account/activate-email',
            path: {
                'ver': ver,
            },
            query: {
                'userId': userId,
                'token': token,
            },
        });
    }

    /**
     * @param ver 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountLoyaltySyncAuto(
ver: string,
requestBody?: SourceModelOld,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/loyalty/syncAuto',
            path: {
                'ver': ver,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountChangePassword(
ver: string,
formData?: {
OldPassword?: string;
NewPassword?: string;
ConfirmPassword?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/change-password',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param email 
     * @param source 
     * @param ver 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiVAccountResendActivation(
email: string,
source: string,
ver: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v{ver}/account/resend-activation/{email}/{source}',
            path: {
                'email': email,
                'source': source,
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountResetPassword(
ver: string,
formData?: {
Email?: string;
Source?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/reset-password',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountResetPasswordConfirmation(
ver: string,
formData?: {
UserId?: string;
Code?: string;
Password?: string;
ConfirmPassword?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/reset-password/confirmation',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param email 
     * @param ver 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiVAccountCheckEmail(
email: string,
ver: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v{ver}/account/check-email/{email}',
            path: {
                'email': email,
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountDeleteUser(
ver: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/delete-user',
            path: {
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiVAccountHistorySignup(
ver: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v{ver}/account/history-signup',
            path: {
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiVAccountLoyaltySyncMember(
ver: string,
requestBody?: SyncMemberModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v{ver}/account/loyalty/syncMember',
            path: {
                'ver': ver,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
