/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SsrSegment } from './SsrSegment';

export type UpdateSsrModel = {
    Signature?: string | null;
    RemoveExistingSsrs?: Array<SsrSegment> | null;
    AddSsrs?: Array<SsrSegment> | null;
    IsInsurance?: boolean;
    IsTier?: boolean;
    Email?: string | null;
};
