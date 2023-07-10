/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlightInsiderItin } from './FlightInsiderItin';

export type GetInsiderItinResponse = {
    Pnr?: string | null;
    NumericRecordLocator?: string | null;
    BalanceDue?: number;
    TotalAmount?: number;
    Status?: string | null;
    IsSkor?: boolean;
    HoldDueDate?: string;
    BookDate?: string;
    Flight?: Array<FlightInsiderItin> | null;
};
