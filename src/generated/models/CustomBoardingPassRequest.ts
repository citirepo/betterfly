/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Journey } from './Journey';

export type CustomBoardingPassRequest = {
    Pnr?: string | null;
    Signature?: string | null;
    Journey?: Array<Journey> | null;
    MemberEmail?: string | null;
    MemberFirstName?: string | null;
    MemberLastName?: string | null;
};
