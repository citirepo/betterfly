/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AwardRedeem } from './AwardRedeem';
import type { BundlingDescription } from './BundlingDescription';
import type { CmsbannerDetail } from './CmsbannerDetail';
import type { Cmsevent } from './Cmsevent';
import type { CmseventDetail } from './CmseventDetail';
import type { CmspaymentBankImage } from './CmspaymentBankImage';
import type { CmsrouteAirportNewSkin } from './CmsrouteAirportNewSkin';

export type Cmsbanner = {
    IdCmsBanner?: string;
    Name?: string | null;
    Path?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    AwardRedeem?: Array<AwardRedeem> | null;
    BundlingDescription?: Array<BundlingDescription> | null;
    CmsbannerDetail?: Array<CmsbannerDetail> | null;
    Cmsevent?: Array<Cmsevent> | null;
    CmseventDetail?: Array<CmseventDetail> | null;
    CmspaymentBankImage?: Array<CmspaymentBankImage> | null;
    CmsrouteAirportNewSkin?: Array<CmsrouteAirportNewSkin> | null;
};
