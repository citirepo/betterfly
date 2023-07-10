/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BenefitSsr } from './BenefitSsr';
import type { BundlingDescription } from './BundlingDescription';
import type { ClassOfService } from './ClassOfService';

export type BundlingProduct = {
    Id?: string;
    BundlingName?: string | null;
    Ssr?: string | null;
    Percentage?: number | null;
    ChannelAvailable?: string | null;
    IsActive?: boolean | null;
    IsDeleted?: boolean | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    BenefitSsr?: Array<BenefitSsr> | null;
    BundlingDescription?: Array<BundlingDescription> | null;
    ClassOfService?: Array<ClassOfService> | null;
};
