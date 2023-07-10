/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cmsbanner } from './Cmsbanner';

export type Cmsevent = {
    Id?: string;
    Name?: string | null;
    Description?: string | null;
    BannerId?: string;
    IsActive?: boolean;
    CreatedDate?: string;
    CreatedBy?: string | null;
    UpdatedDate?: string;
    UpdatedBy?: string | null;
    Banner?: Cmsbanner;
};
