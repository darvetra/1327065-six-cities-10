import dayjs from 'dayjs';

import {OfferType} from './types/offers';

const calcRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const humanizeDate = (dueDate: string) => dayjs(dueDate).format('MMMM YYYY');

const getOffersByCity = (offers: OfferType[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

export {
  calcRatingWidth,
  humanizeDate,
  getOffersByCity
};

