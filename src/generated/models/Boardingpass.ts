/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdvertisementResponse } from './AdvertisementResponse';
import type { Paxes } from './Paxes';

export type Boardingpass = {
    pnr?: string | null;
    stationDepartCode?: string | null;
    stationDepartName?: string | null;
    stationArriveCode?: string | null;
    stationArriveName?: string | null;
    sta?: string;
    std?: string;
    paxes?: Array<Paxes> | null;
    advertisement?: AdvertisementResponse;
};
