/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';
import type { CmslowestPrice } from './CmslowestPrice';
import type { CmsrouteOriginNewSkin } from './CmsrouteOriginNewSkin';

export type CmsrouteAirportNewSkin = {
    Id?: string;
    RouteId?: string | null;
    IdCmsBanner?: string | null;
    Code?: string | null;
    Name?: string | null;
    TripType?: string | null;
    IsRegular?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    IsFeatured?: boolean | null;
    OrderPos?: number | null;
    IsActive?: boolean | null;
    IdCmsBannerNavigation?: Cmsbanner;
    Route?: CmsrouteOriginNewSkin;
    CmslowestPrice?: Array<CmslowestPrice> | null;
};
