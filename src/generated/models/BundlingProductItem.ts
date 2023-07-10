/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlingDetail } from './BundlingDetail';

export type BundlingProductItem = {
    Id?: string;
    Bundling?: string | null;
    Amount?: number;
    Ssr?: string | null;
    UrlInfo?: string | null;
    IsActive?: boolean;
    RestrictionMinute?: number;
    OutboundStation?: string | null;
    InboundStation?: string | null;
    BundlingDetail?: Array<BundlingDetail> | null;
};
