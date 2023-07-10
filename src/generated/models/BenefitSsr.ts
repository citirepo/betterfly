/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlingProduct } from './BundlingProduct';

export type BenefitSsr = {
    Id?: string;
    BundlingProductId?: string | null;
    Name?: string | null;
    IsActive?: boolean | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    IsOverride?: boolean | null;
    PercentageFromBundling?: number | null;
    FeeType?: string | null;
    BundlingProduct?: BundlingProduct;
};
