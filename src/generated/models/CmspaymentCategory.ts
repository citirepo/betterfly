/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CmspaymentBank } from './CmspaymentBank';
import type { CmspaymentCatName } from './CmspaymentCatName';

export type CmspaymentCategory = {
    IdPaymentCategory?: string;
    Code?: string | null;
    OrderItem?: number;
    Status?: boolean;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CmspaymentBank?: Array<CmspaymentBank> | null;
    CmspaymentCatName?: Array<CmspaymentCatName> | null;
};
