/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RouteEnum } from './RouteEnum';

export type SearchScheduleTripRequest = {
    Departure: string;
    Arival: string;
    Trip?: RouteEnum;
    Date: string;
    ReturnDate?: string | null;
    FlightNo?: string | null;
    Elderly?: number;
    Adult?: number;
    Child?: number;
    Infant?: number;
    Signature: string;
    DisplayCurrencyCode?: string | null;
    SsrCode?: Array<string> | null;
};
