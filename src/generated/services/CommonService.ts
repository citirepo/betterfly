/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CitineraryResponseIEnumerableGenericResponse } from '../models/CitineraryResponseIEnumerableGenericResponse';
import type { CmseventDetailIEnumerableGenericResponse } from '../models/CmseventDetailIEnumerableGenericResponse';
import type { DateMarkRequest } from '../models/DateMarkRequest';
import type { DateMarkResponseIEnumerableGenericResponse } from '../models/DateMarkResponseIEnumerableGenericResponse';
import type { DineAndShopModelIEnumerableGenericResponse } from '../models/DineAndShopModelIEnumerableGenericResponse';
import type { GetAllRouteResultIEnumerableGenericResponse } from '../models/GetAllRouteResultIEnumerableGenericResponse';
import type { GetNewCalendarPriceRequest } from '../models/GetNewCalendarPriceRequest';
import type { GreenPassModelIEnumerableGenericResponse } from '../models/GreenPassModelIEnumerableGenericResponse';
import type { NewRouteOriginResponseIEnumerableGenericResponse } from '../models/NewRouteOriginResponseIEnumerableGenericResponse';
import type { OnGoingBannerIEnumerableGenericResponse } from '../models/OnGoingBannerIEnumerableGenericResponse';
import type { ResponseClaimGreenPassAvailabilityGenericResponse } from '../models/ResponseClaimGreenPassAvailabilityGenericResponse';
import type { RN_GetCalendarPriceResultIEnumerableGenericResponse } from '../models/RN_GetCalendarPriceResultIEnumerableGenericResponse';
import type { RouteBannerRequest } from '../models/RouteBannerRequest';
import type { RouteBannerResponseGenericResponse } from '../models/RouteBannerResponseGenericResponse';
import type { RouteDestinationResponseIEnumerableGenericResponse } from '../models/RouteDestinationResponseIEnumerableGenericResponse';
import type { SpGetAllStationResponseIEnumerableGenericResponse } from '../models/SpGetAllStationResponseIEnumerableGenericResponse';
import type { StringGenericResponse } from '../models/StringGenericResponse';
import type { TerminalModelIEnumerableGenericResponse } from '../models/TerminalModelIEnumerableGenericResponse';
import type { TitleModelIEnumerableGenericResponse } from '../models/TitleModelIEnumerableGenericResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommonService {

    /**
     * @returns TerminalModelIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonAllTerminals(): CancelablePromise<TerminalModelIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/AllTerminals',
        });
    }

    /**
     * @returns TitleModelIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonTitles(): CancelablePromise<TitleModelIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/Titles',
        });
    }

    /**
     * @returns NewRouteOriginResponseIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetOriginRoute(): CancelablePromise<NewRouteOriginResponseIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetOriginRoute',
        });
    }

    /**
     * @param origin 
     * @returns RouteDestinationResponseIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetDestinationRoute(
origin?: string,
): CancelablePromise<RouteDestinationResponseIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetDestinationRoute',
            query: {
                'origin': origin,
            },
        });
    }

    /**
     * @returns SpGetAllStationResponseIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonStations(): CancelablePromise<SpGetAllStationResponseIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/Stations',
        });
    }

    /**
     * @returns GetAllRouteResultIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetAllRoutes(): CancelablePromise<GetAllRouteResultIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetAllRoutes',
        });
    }

    /**
     * @param requestBody 
     * @returns RouteBannerResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiCommonGetRouteBanner(
requestBody?: RouteBannerRequest,
): CancelablePromise<RouteBannerResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/GetRouteBanner',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns DateMarkResponseIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static postApiCommonGetDateMarks(
requestBody?: DateMarkRequest,
): CancelablePromise<DateMarkResponseIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/GetDateMarks',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns RN_GetCalendarPriceResultIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static postApiCommonGetNewCalendarPrice(
requestBody?: GetNewCalendarPriceRequest,
): CancelablePromise<RN_GetCalendarPriceResultIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/GetNewCalendarPrice',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns GreenPassModelIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetGreenPass(
id?: number,
): CancelablePromise<GreenPassModelIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetGreenPass',
            query: {
                'Id': id,
            },
        });
    }

    /**
     * @param email 
     * @param greenPassId 
     * @returns ResponseClaimGreenPassAvailabilityGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetClaimGreenPass(
email?: string,
greenPassId?: number,
): CancelablePromise<ResponseClaimGreenPassAvailabilityGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetClaimGreenPass',
            query: {
                'Email': email,
                'GreenPassId': greenPassId,
            },
        });
    }

    /**
     * @param email 
     * @param campaignName 
     * @returns ResponseClaimGreenPassAvailabilityGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetCitiTreat(
email?: string,
campaignName?: string,
): CancelablePromise<ResponseClaimGreenPassAvailabilityGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetCitiTreat',
            query: {
                'Email': email,
                'CampaignName': campaignName,
            },
        });
    }

    /**
     * @param formData 
     * @returns StringGenericResponse Success
     * @throws ApiError
     */
    public static postApiCommonClaimGreenPass(
formData?: {
Email?: string;
GreenPassId?: number;
ClaimDate?: string;
CreatedDate?: string;
CreatedBy?: string;
},
): CancelablePromise<StringGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/ClaimGreenPass',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonIsVipv1(
formData?: {
IdentityNumber?: string;
Signature?: string;
CustomerNumber?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/IsVIPV1',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonIsVip(
formData?: {
IdentityNumber?: string;
Signature?: string;
CustomerNumber?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/IsVIP',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonPrintBoardingPass(
formData?: {
Signature: string;
RecordLocator: string;
SegmentSellKey: string;
'Name.Title': string;
'Name.FirstName': string;
'Name.LastName': string;
PrintInfant?: boolean;
'NameInfant.FirstName'?: string;
'NameInfant.LastName'?: string;
Height: number;
Width: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/PrintBoardingPass',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id 
     * @returns CmseventDetailIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetEventDetail(
id?: string,
): CancelablePromise<CmseventDetailIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetEventDetail',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param code 
     * @returns TerminalModelIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetTerminalByCode(
code?: string,
): CancelablePromise<TerminalModelIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetTerminalByCode',
            query: {
                'code': code,
            },
        });
    }

    /**
     * @returns DineAndShopModelIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetDineAndShopInfo(): CancelablePromise<DineAndShopModelIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetDineAndShopInfo',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonCheckFlightManifest(
formData?: {
DepartureDate: string;
FlightNo: number;
DepStation: string;
ArrStation: string;
Pin: number;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/CheckFlightManifest',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonIsCorporateTicket(
formData?: {
RecordLocator: string;
Signature: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/IsCorporateTicket',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonRatingApps(
formData?: {
PNR: string;
Star?: string;
Satisfaction?: string;
Comment?: string;
CreatedBy?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/RatingApps',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param pnr 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetRatingApps(
pnr?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetRatingApps',
            query: {
                'PNR': pnr,
            },
        });
    }

    /**
     * @param departure 
     * @param arrival 
     * @param isAtr 
     * @param isConnecting 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetFba(
departure?: string,
arrival?: string,
isAtr: boolean = false,
isConnecting: boolean = false,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetFBA',
            query: {
                'departure': departure,
                'arrival': arrival,
                'isAtr': isAtr,
                'isConnecting': isConnecting,
            },
        });
    }

    /**
     * @param promoType 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetPromo(
promoType?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetPromo',
            query: {
                'PromoType': promoType,
            },
        });
    }

    /**
     * @param clientCode 
     * @returns OnGoingBannerIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonGetOnGoingBanner(
clientCode?: string,
): CancelablePromise<OnGoingBannerIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetOnGoingBanner',
            query: {
                'clientCode': clientCode,
            },
        });
    }

    /**
     * @returns CitineraryResponseIEnumerableGenericResponse Success
     * @throws ApiError
     */
    public static getApiCommonCitinerary(): CancelablePromise<CitineraryResponseIEnumerableGenericResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/Citinerary',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetActivePromoCode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetActivePromoCode',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetActiveExtraList(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetActiveExtraList',
        });
    }

    /**
     * @param tier 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonBenefitByTier(
tier?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/BenefitByTier',
            query: {
                'Tier': tier,
            },
        });
    }

    /**
     * @param country 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetStateByCountry(
country?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetStateByCountry',
            query: {
                'country': country,
            },
        });
    }

    /**
     * @param country 
     * @param state 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetCityByState(
country?: string,
state?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetCityByState',
            query: {
                'country': country,
                'state': state,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetAllCountry(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetAllCountry',
        });
    }

    /**
     * @param stationCode 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetStationName(
stationCode?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetStationName',
            query: {
                'stationCode': stationCode,
            },
        });
    }

    /**
     * @param dep 
     * @param arr 
     * @param classOfService 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetMilesInfo(
dep?: string,
arr?: string,
classOfService?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetMilesInfo',
            query: {
                'dep': dep,
                'arr': arr,
                'classOfService': classOfService,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetCurrency(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetCurrency',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCommonGetCallbackUrl(
formData?: {
callback?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Common/GetCallbackUrl',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param currencyTo 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCommonGetRateFromIdr(
currencyTo?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Common/GetRateFromIdr',
            query: {
                'CurrencyTo': currencyTo,
            },
        });
    }

}
