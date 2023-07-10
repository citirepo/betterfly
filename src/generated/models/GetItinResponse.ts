/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlightItin } from './FlightItin';
import type { PassengerItin } from './PassengerItin';

export type GetItinResponse = {
    Pnr?: string | null;
    NumericRecordLocator?: string | null;
    BalanceDue?: number;
    TotalAmount?: number;
    Status?: string | null;
    IsSkor?: boolean;
    HoldDueDate?: string;
    BookDate?: string;
    Flight?: Array<FlightItin> | null;
    Passengers?: Array<PassengerItin> | null;
};
