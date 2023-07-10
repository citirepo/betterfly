/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';

export type AwardRedeem = {
    Id?: number;
    AwardRedeemId?: string;
    AwardCode?: string | null;
    BannerId?: string | null;
    IsActive?: boolean | null;
    CreatedDate?: string | null;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    TermCondition?: string | null;
    Banner?: Cmsbanner;
};
