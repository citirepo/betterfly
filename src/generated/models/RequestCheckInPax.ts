/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckInJourney } from './CheckInJourney';

export type RequestCheckInPax = {
    Pnr?: string | null;
    Signature?: string | null;
    Journey?: Array<CheckInJourney> | null;
};
