/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchScheduleLowFareRequest = {
    Departure: string;
    Arival: string;
    BeginDate: string;
    EndDate?: string;
    Elderly?: number;
    Adult?: number;
    Child?: number;
    Infant?: number;
    Signature: string;
    PromoCode?: string | null;
    GatfPromoCode?: string | null;
    UseMileage: boolean;
    DisplayCurrencyCode?: string | null;
    IsFlightPlus?: boolean;
    ReferalCode?: string | null;
    ProductClass?: string | null;
    FareClass?: string | null;
    CorpTripType?: string | null;
};
