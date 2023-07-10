/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InfantPax } from './InfantPax';
import type { PassengerSSR } from './PassengerSSR';

export type PassengerItin = {
    Title?: string | null;
    FirstName?: string | null;
    LastName?: string | null;
    FullName?: string | null;
    PaxType?: string | null;
    Infant?: InfantPax;
    PassengerSSR?: Array<PassengerSSR> | null;
};
