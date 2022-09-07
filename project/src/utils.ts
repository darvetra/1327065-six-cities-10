import dayjs from 'dayjs';
import {AuthorizationStatus} from './const';
import {OfferType} from './types/offers';
import {ReviewType} from './types/review';

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const humanizeDate = (dueDate: string) => dayjs(dueDate).format('MMMM YYYY');

const getOffersByCity = (offers: OfferType[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const getWeightForPriceHigh = (priceA: number, priceB: number) => priceA - priceB;
const getWeightForPriceLow = (priceA: number, priceB: number) => priceB - priceA;
const getWeightForTopRatedFirst = (ratedA: number, ratedB: number) => ratedB - ratedA;

const sortPriceHigh = (offerA: OfferType, offerB: OfferType) => getWeightForPriceHigh(offerA.price, offerB.price);
const sortPriceLow = (offerA: OfferType, offerB: OfferType) => getWeightForPriceLow(offerA.price, offerB.price);
const sortTopRatedFirst = (offerA: OfferType, offerB: OfferType) => getWeightForTopRatedFirst(offerA.rating, offerB.rating);

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const sortDayDown = (reviewA: ReviewType, reviewB: ReviewType) => dayjs(reviewB.date).diff(dayjs(reviewA.date));

export {
  calcRatingWidth,
  humanizeDate,
  getOffersByCity,
  sortPriceHigh,
  sortPriceLow,
  sortTopRatedFirst,
  isCheckedAuth,
  sortDayDown
};

