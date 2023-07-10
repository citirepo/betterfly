/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanGenericResponse } from '../models/BooleanGenericResponse';
import type { CreatePasswordForOAuthRequest } from '../models/CreatePasswordForOAuthRequest';
import type { Int32GenericResponse } from '../models/Int32GenericResponse';
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import type { TokenRequest } from '../models/TokenRequest';
import type { TokenSuccessResponseGenericResponse } from '../models/TokenSuccessResponseGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OAuthService {

    /**
     * @param ver 
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVToken(
ver: string,
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/Token',
            path: {
                'ver': ver,
            },
        });
    }

    /**
     * @param ver 
     * @param requestBody 
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVGetToken(
ver: string,
requestBody?: TokenRequest,
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/GetToken',
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
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVFacebookSignin(
ver: string,
formData?: {
accessToken?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/facebook-signin',
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
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVFacebookSignup(
ver: string,
formData?: {
AccessToken?: string;
PhoneNoCode?: string;
PhoneNo?: string;
OrganizationCode?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/facebook-signup',
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
    public static postOAuthVSendemail(
ver: string,
formData?: {
email?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/sendemail',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param accessToken 
     * @param formData 
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVSignInWithGoogle(
ver: string,
accessToken?: string,
formData?: {
credentials?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/SignInWithGoogle',
            path: {
                'ver': ver,
            },
            query: {
                'accessToken': accessToken,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param formData 
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVSignInWithApple(
ver: string,
formData?: {
AuthCode?: string;
IdToken?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/SignInWithApple',
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
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVSignUpWithGoogle(
ver: string,
formData?: {
Credentials?: string;
PhoneNoCode?: string;
PhoneNo?: string;
FirstName?: string;
LastName?: string;
Title?: string;
OrganizationCode?: string;
Dob?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/SignUpWithGoogle',
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
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVSignUpWithApple(
ver: string,
formData?: {
AuthCode?: string;
IdToken?: string;
Title?: string;
FirstName?: string;
LastName?: string;
PhoneNoCode?: string;
PhoneNo?: string;
OrganizationCode?: string;
Dob?: string;
},
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/SignUpWithApple',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param ver 
     * @param requestBody 
     * @returns TokenSuccessResponseGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVRefreshToken(
ver: string,
requestBody?: RefreshTokenRequest,
): CancelablePromise<TokenSuccessResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/RefreshToken',
            path: {
                'ver': ver,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param ver 
     * @param requestBody 
     * @returns Int32GenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVCreatePasswordForOAuth(
ver: string,
requestBody?: CreatePasswordForOAuthRequest,
): CancelablePromise<Int32GenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/CreatePasswordForOAuth',
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
     * @returns BooleanGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVRevokeGoogleSignIn(
ver: string,
formData?: {
Token?: string;
RefreshToken?: string;
},
): CancelablePromise<BooleanGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/RevokeGoogleSignIn',
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
     * @returns BooleanGenericResponse Success
     * @throws ApiError
     */
    public static postOAuthVRevokeAppleSignIn(
ver: string,
formData?: {
Token?: string;
RefreshToken?: string;
},
): CancelablePromise<BooleanGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/OAuth/v{ver}/RevokeAppleSignIn',
            path: {
                'ver': ver,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
