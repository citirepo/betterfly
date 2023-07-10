/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PassengerTravelDocumentRequest } from './PassengerTravelDocumentRequest';

export type PaxModelExtended = {
    Title: string;
    FirstName: string;
    LastName: string;
    Dob: string;
    TravelDocs?: Array<PassengerTravelDocumentRequest> | null;
    CustomerNumber?: string | null;
    Nationality?: string | null;
    PassportIssuedDate?: string;
    PassportExpDate?: string;
    ResidentCountry?: string | null;
    PassportIssuedByCode?: string | null;
    PassportBirthCountry?: string | null;
    PassportNationality?: string | null;
    CompanyName?: string | null;
    CompanyPhone?: string | null;
    CompanyAddress?: string | null;
    CompanyEmail?: string | null;
    FullAddress?: string | null;
    TripPurpose?: string | null;
    DepStation?: string | null;
    FreqFlayerNo?: string | null;
    IsUpdate?: boolean;
    IdType?: string | null;
    IdNumber?: string | null;
    Vaccine?: number;
    IssuingCountry?: string | null;
    IssuedDate?: string | null;
    ExpiredDate?: string | null;
};
