/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModelStateError } from './ModelStateError';

export type ApiResponseStatus = {
    Success?: boolean;
    StatusCode?: number;
    ErrorMessage?: string | null;
    ModelValidationErrors?: Array<ModelStateError> | null;
};
