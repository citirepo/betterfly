/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';
import type { CmsbannerPage } from './CmsbannerPage';

export type CmsbannerDetail = {
    IdCmsBannerDetail?: string;
    IdCmsBanner?: string;
    IdCmsBannerPage?: string;
    IsActive?: boolean;
    DateStart?: string;
    DateEnd?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    OrderBanner?: number | null;
    LinkUrl?: string | null;
    IdCmsBannerNavigation?: Cmsbanner;
    IdCmsBannerPageNavigation?: CmsbannerPage;
};
