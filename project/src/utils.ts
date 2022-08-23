import dayjs from 'dayjs';

import {OfferType} from './types/offers';

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const humanizeDate = (dueDate: string) => dayjs(dueDate).format('MMMM YYYY');

const getOffersByCity = (offers: OfferType[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const getWeightForPriceHigh = (priceA: number, priceB: number) => priceA - priceB;
const getWeightForPriceLow = (priceA: number, priceB: number) => priceB - priceA;
const getWeightForTopRatedFirst = (ratedA: number, ratedB: number) => ratedB - ratedA;

const sortPriceHigh = (offerA: OfferType, offerB: OfferType) => getWeightForPriceHigh(offerA.price, offerB.price);
const sortPriceLow = (offerA: OfferType, offerB: OfferType) => getWeightForPriceLow(offerA.price, offerB.price);
const sortTopRatedFirst = (offerA: OfferType, offerB: OfferType) => getWeightForTopRatedFirst(offerA.rating, offerB.rating);

export {
  calcRatingWidth,
  humanizeDate,
  getOffersByCity,
  sortPriceHigh,
  sortPriceLow,
  sortTopRatedFirst
};

