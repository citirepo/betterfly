/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaxCheckin } from './PaxCheckin';

export type FlightCheckin = {
    OriginStation?: string | null;
    OriginStationCode?: string | null;
    DestinationStation?: string | null;
    DestinationStationCode?: string | null;
    FlightNumber?: string | null;
    Std?: string;
    JourneySellKey?: string | null;
    PaxCheckin?: Array<PaxCheckin> | null;
};
