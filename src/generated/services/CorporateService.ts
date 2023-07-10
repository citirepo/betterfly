/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateOrgCodeCorporateModel } from '../models/UpdateOrgCodeCorporateModel';
import type { UpdateOrgCodeResponseGenericResponse } from '../models/UpdateOrgCodeResponseGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CorporateService {

    /**
     * @param requestBody 
     * @returns UpdateOrgCodeResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiCorporateAccountUpdateOrgCode(
requestBody?: UpdateOrgCodeCorporateModel,
): CancelablePromise<UpdateOrgCodeResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Corporate/account/update/org-code',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
