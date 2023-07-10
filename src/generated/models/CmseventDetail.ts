/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';

export type CmseventDetail = {
    Id?: string;
    EventId?: string;
    BannerId?: string;
    Name?: string | null;
    Description?: string | null;
    SsrCode?: string | null;
    IsActive?: boolean;
    CreatedDate?: string;
    CreatedBy?: string | null;
    UpdatedDate?: string | null;
    UpdatedBy?: string | null;
    Banner?: Cmsbanner;
};
