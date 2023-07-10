/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PassengerInfTravelDocumentRequest } from './PassengerInfTravelDocumentRequest';

export type PaxInfantModelExtended = {
    Sex?: string | null;
    FirstName: string;
    LastName: string;
    Dob: string;
    InfantWith: number;
    Nationality?: string | null;
    TravelDocsInf?: Array<PassengerInfTravelDocumentRequest> | null;
    IdType?: string | null;
    IdNumber?: string | null;
    Vaccine?: number | null;
    IssuingCountry?: string | null;
    IssuedDate?: string | null;
    ExpiredDate?: string | null;
};
