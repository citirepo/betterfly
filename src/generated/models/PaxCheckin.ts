/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaxInfant } from './PaxInfant';

export type PaxCheckin = {
    FirstName?: string | null;
    LastName?: string | null;
    Title?: string | null;
    IsCheckin?: boolean;
    PaxNumber?: number;
    PaxSeat?: Array<string> | null;
    PaxInfant?: PaxInfant;
    Nik?: string | null;
    PaxType?: string | null;
    IsFastlane?: boolean;
};
