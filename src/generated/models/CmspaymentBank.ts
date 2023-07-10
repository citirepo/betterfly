/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CmspaymentBankDesc } from './CmspaymentBankDesc';
import type { CmspaymentBankImage } from './CmspaymentBankImage';
import type { CmspaymentCategory } from './CmspaymentCategory';

export type CmspaymentBank = {
    IdPaymentBank?: string;
    IdPaymentCategory?: string;
    Code?: string | null;
    Status?: boolean;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    OrderItem?: number;
    IdPaymentCategoryNavigation?: CmspaymentCategory;
    CmspaymentBankDesc?: Array<CmspaymentBankDesc> | null;
    CmspaymentBankImage?: Array<CmspaymentBankImage> | null;
};
