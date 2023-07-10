/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCommentResponseGenericResponse } from '../models/AddCommentResponseGenericResponse';
import type { ApplyPromotionResponseGenericResponse } from '../models/ApplyPromotionResponseGenericResponse';
import type { BFFModelListGenericResponse } from '../models/BFFModelListGenericResponse';
import type { CancelResponseGenericResponse } from '../models/CancelResponseGenericResponse';
import type { CancelSeatRequest } from '../models/CancelSeatRequest';
import type { CancelSsrRequestData } from '../models/CancelSsrRequestData';
import type { ClearBookingSessionRequest } from '../models/ClearBookingSessionRequest';
import type { GetAvailabilityBFFModel } from '../models/GetAvailabilityBFFModel';
import type { GetBundlingResponseGenericResponse } from '../models/GetBundlingResponseGenericResponse';
import type { GetInsiderItinResponseGenericResponse } from '../models/GetInsiderItinResponseGenericResponse';
import type { GetItinReq } from '../models/GetItinReq';
import type { GetItinResponseGenericResponse } from '../models/GetItinResponseGenericResponse';
import type { GetJourneyPassengerRequest } from '../models/GetJourneyPassengerRequest';
import type { GetJourneyPassengerResponseGenericResponse } from '../models/GetJourneyPassengerResponseGenericResponse';
import type { GetLowestFareListResponseListGenericResponse } from '../models/GetLowestFareListResponseListGenericResponse';
import type { GetPremiPriceRequest } from '../models/GetPremiPriceRequest';
import type { GetPremiPriceResponseGenericResponse } from '../models/GetPremiPriceResponseGenericResponse';
import type { GetTripAvailabilityWithSSRResponseGenericResponse } from '../models/GetTripAvailabilityWithSSRResponseGenericResponse';
import type { IssuedRequest } from '../models/IssuedRequest';
import type { ListPaxSsr } from '../models/ListPaxSsr';
import type { OtherSsrSegment } from '../models/OtherSsrSegment';
import type { PaxInfantModel } from '../models/PaxInfantModel';
import type { PaxInfantModelExtended } from '../models/PaxInfantModelExtended';
import type { PaxModel } from '../models/PaxModel';
import type { PaxModelExtended } from '../models/PaxModelExtended';
import type { PaxRequest } from '../models/PaxRequest';
import type { PaxSummaryDetailFlighInfo } from '../models/PaxSummaryDetailFlighInfo';
import type { PriceInsRequest } from '../models/PriceInsRequest';
import type { ProcessCheckoutResponseGenericResponse } from '../models/ProcessCheckoutResponseGenericResponse';
import type { RouteEnum } from '../models/RouteEnum';
import type { SearchScheduleLowFareRequest } from '../models/SearchScheduleLowFareRequest';
import type { SearchScheduleTripRequest } from '../models/SearchScheduleTripRequest';
import type { SsrCMSModelListGenericResponse } from '../models/SsrCMSModelListGenericResponse';
import type { StringGenericResponse } from '../models/StringGenericResponse';
import type { UnassignSeatsResponseGenericResponse } from '../models/UnassignSeatsResponseGenericResponse';
import type { UpdatePassengersResponseGenericResponse } from '../models/UpdatePassengersResponseGenericResponse';
import type { UpdateSsrModel } from '../models/UpdateSsrModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookingService {

    /**
     * @param formData 
     * @returns GetBundlingResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetBundling(
formData?: {
Departure?: string;
Arrival?: string;
Currency?: string;
IsRoundtrip?: boolean;
CorpTripType?: string;
},
): CancelablePromise<GetBundlingResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetBundling',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetAvailabilityWithBundling(
formData?: {
Departure: string;
Arival: string;
Trip?: RouteEnum;
Date: string;
ReturnDate?: string;
FlightNo?: string;
Elderly?: number;
Adult?: number;
Child?: number;
Infant?: number;
Signature: string;
PromoCode?: string;
GatfPromoCode?: string;
UseMileage: boolean;
DisplayCurrencyCode?: string;
IsFlightPlus?: boolean;
ProductClass?: string;
IsFamilyPack?: boolean;
FareClass?: string;
ReferalCode?: string;
UseLinkMiles?: boolean;
isBff?: boolean;
CorpTripType?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetAvailabilityWithBundling',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns BFFModelListGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetAvailabilityBff(
requestBody?: GetAvailabilityBFFModel,
): CancelablePromise<BFFModelListGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetAvailabilityBFF',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns GetLowestFareListResponseListGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetLowFares(
requestBody?: SearchScheduleLowFareRequest,
): CancelablePromise<GetLowestFareListResponseListGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetLowFares',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetLowestFareAvailabilityWithBundling(
formData?: {
Departure: string;
Arival: string;
Trip?: RouteEnum;
Date: string;
ReturnDate?: string;
FlightNo?: string;
Elderly?: number;
Adult?: number;
Child?: number;
Infant?: number;
Signature: string;
PromoCode?: string;
GatfPromoCode?: string;
UseMileage: boolean;
DisplayCurrencyCode?: string;
IsFlightPlus?: boolean;
ProductClass?: string;
IsFamilyPack?: boolean;
FareClass?: string;
ReferalCode?: string;
UseLinkMiles?: boolean;
isBff?: boolean;
CorpTripType?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetLowestFareAvailabilityWithBundling',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns GetTripAvailabilityWithSSRResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetTripAvailabilityWithSsr(
requestBody?: SearchScheduleTripRequest,
): CancelablePromise<GetTripAvailabilityWithSSRResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetTripAvailabilityWithSsr',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingSellFlights(
formData?: {
Elderly?: number;
Adult?: number;
Child?: number;
BookingInfo: Array<string>;
Signature: string;
PromoCode?: string;
IsMiles?: boolean;
ReferalCode?: string;
CustomerNumber?: string;
OrgCode?: string;
IsPackage?: boolean;
BundlingSegments?: Array<OtherSsrSegment>;
DisplayCurrencyCode?: string;
agentCodePOS?: string;
orgCodePos?: string;
domainCodePos?: string;
UseLinkMiles?: boolean;
IsAtr?: boolean;
BundlingSsr?: string;
CorpTripType?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/SellFlights',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns UpdatePassengersResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingAddPax(
formData?: {
Signature?: string;
},
): CancelablePromise<UpdatePassengersResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/AddPax',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingAddPassengerInfo(
formData?: {
JourneySellKey?: string;
SegmentSellKey?: string;
Trip?: RouteEnum;
Adult?: number;
Child?: number;
Elderly?: number;
Infant?: number;
'PaxContact.Email': string;
'PaxContact.Title': string;
'PaxContact.FirstName': string;
'PaxContact.LastName': string;
'PaxContact.PhoneNoCode': string;
'PaxContact.PhoneNo': string;
'PaxContact.City': string;
'PaxContact.State': string;
'PaxContact.ZipCode': string;
'PaxContact.Country': string;
'PaxContact.Address': string;
'PaxContact.CustomerNumber'?: string;
'PaxContact.CorpInfo'?: string;
AdultPassenger?: Array<PaxModel>;
ElderlyPassenger?: Array<PaxModel>;
ChildPassenger?: Array<PaxModel>;
InfantPassenger?: Array<PaxInfantModel>;
Signature?: string;
HashCode?: string;
UseMileage?: boolean;
isSpam?: boolean;
sourceOrg?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/AddPassengerInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingAddPassengerInfoNew(
formData?: {
JourneySellKey?: string;
SegmentSellKey?: string;
Trip?: RouteEnum;
Adult?: number;
Child?: number;
Elderly?: number;
Infant?: number;
'PaxContact.Email': string;
'PaxContact.Title': string;
'PaxContact.FirstName': string;
'PaxContact.LastName': string;
'PaxContact.PhoneNoCode': string;
'PaxContact.PhoneNo': string;
'PaxContact.City': string;
'PaxContact.State': string;
'PaxContact.ZipCode': string;
'PaxContact.Country': string;
'PaxContact.Address': string;
'PaxContact.CustomerNumber'?: string;
'PaxContact.CorpInfo'?: string;
AdultPassenger?: Array<PaxModelExtended>;
ElderlyPassenger?: Array<PaxModelExtended>;
ChildPassenger?: Array<PaxModelExtended>;
InfantPassenger?: Array<PaxInfantModelExtended>;
Signature?: string;
HashCode?: string;
UseMileage?: boolean;
isSpam?: boolean;
sourceOrg?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/AddPassengerInfoNew',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingSellByOtherSsr(
formData?: {
Signature: string;
CustomerNumber: string;
OrgCode: string;
SsrSegments?: Array<OtherSsrSegment>;
IsTier?: boolean;
IsInsurance?: boolean;
IsPackageInc?: boolean;
IsGatfPromo?: boolean;
IsLdtPromo?: boolean;
IsDiningExp?: boolean;
BundlingProductCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/SellByOtherSsr',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingBookingCommit(
formData?: {
Signature: string;
PaxCount: number;
RecordLocator?: string;
IsBundling?: boolean;
JourneyBundling?: Array<string>;
JourneyKey?: Array<string>;
PromoCode?: string;
GatfPromoCode?: string;
CustomerNumber?: string;
TravalId?: string;
IsMiles?: boolean;
UseLinkMiles?: boolean;
IsWallet?: boolean;
ReferalCode?: string;
CorpTripPlan?: string;
CorpInfo?: string;
'Redeem.UniqueHashCode'?: string;
'Redeem.TransactionId'?: string;
'Redeem.LmsSignature'?: string;
'Redeem.CustomerNumber'?: string;
'Redeem.LmsAccountId'?: string;
'Redeem.PaxElderly'?: number;
'Redeem.PaxAdult'?: number;
'Redeem.PaxChild'?: number;
'Redeem.PaxInfant'?: number;
'Redeem.RedeemMiles'?: number;
'Redeem.RedeemTotalMiles'?: number;
'Redeem.MilesSessionId'?: string;
AppSource: string;
DisplayCurrencyCode?: string;
BcLastName?: string;
CurrencyCode?: string;
GaBookCode?: string;
MileageSessionId?: string;
agentCodePos?: string;
orgCodePos?: string;
isEzyIns?: boolean;
IsTopSpender?: boolean;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/BookingCommit',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingClearBookingSession(
requestBody?: ClearBookingSessionRequest,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/ClearBookingSession',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingBookingCommitPwa(
formData?: {
Source: string;
IsSkipWriteToDb?: boolean;
Signature: string;
PaxCount: number;
RecordLocator?: string;
IsBundling?: boolean;
JourneyBundling?: Array<string>;
JourneyKey?: Array<string>;
PromoCode?: string;
GatfPromoCode?: string;
CustomerNumber?: string;
TravalId?: string;
IsMiles?: boolean;
UseLinkMiles?: boolean;
IsWallet?: boolean;
ReferalCode?: string;
CorpTripPlan?: string;
CorpInfo?: string;
'Redeem.UniqueHashCode'?: string;
'Redeem.TransactionId'?: string;
'Redeem.LmsSignature'?: string;
'Redeem.CustomerNumber'?: string;
'Redeem.LmsAccountId'?: string;
'Redeem.PaxElderly'?: number;
'Redeem.PaxAdult'?: number;
'Redeem.PaxChild'?: number;
'Redeem.PaxInfant'?: number;
'Redeem.RedeemMiles'?: number;
'Redeem.RedeemTotalMiles'?: number;
'Redeem.MilesSessionId'?: string;
AppSource: string;
DisplayCurrencyCode?: string;
BcLastName?: string;
CurrencyCode?: string;
GaBookCode?: string;
MileageSessionId?: string;
agentCodePos?: string;
orgCodePos?: string;
isEzyIns?: boolean;
IsTopSpender?: boolean;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/BookingCommitPWA',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingBookingCommitPwab2C(
formData?: {
Source: string;
IsSkipWriteToDb?: boolean;
Signature: string;
PaxCount: number;
RecordLocator?: string;
IsBundling?: boolean;
JourneyBundling?: Array<string>;
JourneyKey?: Array<string>;
PromoCode?: string;
GatfPromoCode?: string;
CustomerNumber?: string;
TravalId?: string;
IsMiles?: boolean;
UseLinkMiles?: boolean;
IsWallet?: boolean;
ReferalCode?: string;
CorpTripPlan?: string;
CorpInfo?: string;
'Redeem.UniqueHashCode'?: string;
'Redeem.TransactionId'?: string;
'Redeem.LmsSignature'?: string;
'Redeem.CustomerNumber'?: string;
'Redeem.LmsAccountId'?: string;
'Redeem.PaxElderly'?: number;
'Redeem.PaxAdult'?: number;
'Redeem.PaxChild'?: number;
'Redeem.PaxInfant'?: number;
'Redeem.RedeemMiles'?: number;
'Redeem.RedeemTotalMiles'?: number;
'Redeem.MilesSessionId'?: string;
AppSource: string;
DisplayCurrencyCode?: string;
BcLastName?: string;
CurrencyCode?: string;
GaBookCode?: string;
MileageSessionId?: string;
agentCodePos?: string;
orgCodePos?: string;
isEzyIns?: boolean;
IsTopSpender?: boolean;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/BookingCommitPWAB2C',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetBookingByRecordLocator(
formData?: {
Signature?: string;
RecordLocator?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetBookingByRecordLocator',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingAssignSeats(
formData?: {
Signature: string;
SegmentSellKey: string;
PassengerNumber: number;
UnitDesignator: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/AssignSeats',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param token 
     * @param o 
     * @param d 
     * @param dd 
     * @param rd 
     * @param adt 
     * @param chd 
     * @param inf 
     * @param st 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiBookingGetFlightTIket(
token?: string,
o?: string,
d?: string,
dd?: string,
rd?: string,
adt?: string,
chd?: string,
inf?: string,
st?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Booking/GetFlightTIket',
            query: {
                'token': token,
                'o': o,
                'd': d,
                'dd': dd,
                'rd': rd,
                'adt': adt,
                'chd': chd,
                'inf': inf,
                'st': st,
            },
        });
    }

    /**
     * @param pnr 
     * @param signature 
     * @param requestBody 
     * @returns AddCommentResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingAddComment(
pnr?: string,
signature?: string,
requestBody?: Array<string>,
): CancelablePromise<AddCommentResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/AddComment',
            query: {
                'Pnr': pnr,
                'Signature': signature,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns UnassignSeatsResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingCancelSeat(
requestBody?: CancelSeatRequest,
): CancelablePromise<UnassignSeatsResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/CancelSeat',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns CancelResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingCancelSsr(
requestBody?: CancelSsrRequestData,
): CancelablePromise<CancelResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/CancelSsr',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiBookingGetAllCcInstallment(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Booking/GetAllCcInstallment',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetActivityFlight(
formData?: {
Signature: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetActivityFlight',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns ProcessCheckoutResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingCheckoutEzy(
requestBody?: PriceInsRequest,
): CancelablePromise<ProcessCheckoutResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/CheckoutEzy',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetAllAvailableMeals(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetAllAvailableMeals',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetHistoryFlight(
formData?: {
Signature: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetHistoryFlight',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetStationDetailsForB2C(
formData?: {
RecordLocator?: string;
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetStationDetailsForB2C',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingUpdateJourney(
formData?: {
Signature: string;
JourneySellKeyRemove: string;
JourneySellKeyAdd: string;
FareSellKeyAdd: string;
DepSsr?: string;
ArvSsr?: string;
PNR: string;
ListPax?: Array<ListPaxSsr>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/UpdateJourney',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns GetPremiPriceResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetInsuranceInfo(
requestBody?: GetPremiPriceRequest,
): CancelablePromise<GetPremiPriceResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetInsuranceInfo',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns ApplyPromotionResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingApplyPromotionCode(
formData?: {
PromotionCode: string;
Signature: string;
},
): CancelablePromise<ApplyPromotionResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/ApplyPromotionCode',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns StringGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingIssuedEzy(
requestBody?: IssuedRequest,
): CancelablePromise<StringGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/IssuedEzy',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetPriceInsurance(
formData?: {
signature?: string;
ReferenceNumber?: string;
IsInternational?: boolean;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetPriceInsurance',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetMyBooking(
formData?: {
PerPage?: number;
Page?: number;
Type?: string;
ListPnr?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetMyBooking',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns GetItinResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetItinerary(
requestBody?: GetItinReq,
): CancelablePromise<GetItinResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetItinerary',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns GetInsiderItinResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetInsiderItinerary(
requestBody?: GetItinReq,
): CancelablePromise<GetInsiderItinResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetInsiderItinerary',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetAvailableLounge(
formData?: {
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetAvailableLounge',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetSeatAvailability(
formData?: {
Signature?: string;
STD?: string;
DepartureStation?: string;
ArrivalStation?: string;
FlightNumber?: string;
DisplayCurrencyCode?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetSeatAvailability',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetSsrXtraBaggageAvailability(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetSsrXtraBaggageAvailability',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingUpdateSsr(
requestBody?: UpdateSsrModel,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/UpdateSsr',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetBookingFromState(
formData?: {
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetBookingFromState',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param requestBody 
     * @returns GetJourneyPassengerResponseGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetJourneyPassengers(
requestBody?: GetJourneyPassengerRequest,
): CancelablePromise<GetJourneyPassengerResponseGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetJourneyPassengers',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingDetailSummary(
formData?: {
Signature: string;
paymentType?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/DetailSummary',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetCitihealthSsr(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetCitihealthSSR',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetAvailableCitiWrpz(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetAvailableCitiWrpz',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetSsrAvailibilityByCategory(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetSsrAvailibilityByCategory',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingGetSurpriseIn(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetSurpriseIn',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns SsrCMSModelListGenericResponse Success
     * @throws ApiError
     */
    public static postApiBookingGetPas(
formData?: {
Signature: string;
SegmentSellKey: string;
DisplayCurrencyCode?: string;
Categories?: Array<string>;
},
): CancelablePromise<SsrCMSModelListGenericResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/GetPAS',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param page 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiBookingGetMmbMenu(
page?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Booking/GetMMBMenu',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingDetailFlightInfo(
formData?: {
Signature: string;
JourneySellKey: string;
PromotionCode?: string;
PaxCount: number;
CurrencyCode: string;
Pax: Array<PaxSummaryDetailFlighInfo>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/DetailFlightInfo',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingReschedule(
formData?: {
Signature: string;
JourneySellKeyRemove: string;
JourneySellKeyAdd: string;
FareSellKeyAdd: string;
PNR: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/Reschedule',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingClearSession(
formData?: {
Signature?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/ClearSession',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingRetroClaim(
formData?: {
FirstName: string;
LastName: string;
BookingCode: string;
DepartureStation: string;
ArrivalStation: string;
Signature: string;
MemberId: string;
Email?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/RetroClaim',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param departure 
     * @param arrival 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiBookingFreeFlightBenefit(
departure?: string,
arrival?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Booking/FreeFlightBenefit',
            query: {
                'departure': departure,
                'arrival': arrival,
            },
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingFastLane(
formData?: {
Signature?: string;
Pnr?: string;
PaxNumber?: number;
Nik?: string;
JourneySellKey?: string;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/FastLane',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiBookingUpdateNik(
formData?: {
Signature?: string;
Pnr?: string;
Paxs?: Array<PaxRequest>;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Booking/UpdateNik',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
