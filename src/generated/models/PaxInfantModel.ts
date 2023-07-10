/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PassengerInfTravelDocumentRequest } from './PassengerInfTravelDocumentRequest';

export type PaxInfantModel = {
    Sex?: string | null;
    FirstName: string;
    LastName: string;
    Dob: string;
    InfantWith: number;
    Nationality?: string | null;
    TravelDocsInf?: Array<PassengerInfTravelDocumentRequest> | null;
};
