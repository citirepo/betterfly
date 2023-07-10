/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';
import type { CmspaymentBank } from './CmspaymentBank';

export type CmspaymentBankImage = {
    IdPaymentBankImage?: string;
    IdPaymentBank?: string;
    CmsbannerId?: string;
    ImageCode?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    Cmsbanner?: Cmsbanner;
    IdPaymentBankNavigation?: CmspaymentBank;
};
