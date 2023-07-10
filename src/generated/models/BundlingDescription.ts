/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlingProduct } from './BundlingProduct';
import type { Cmsbanner } from './Cmsbanner';

export type BundlingDescription = {
    Id?: string;
    BundlingProductId?: string | null;
    CmsbannerId?: string | null;
    Title?: string | null;
    SubTitle?: string | null;
    Ssr?: string | null;
    Description?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    BundlingProduct?: BundlingProduct;
    Cmsbanner?: Cmsbanner;
};
