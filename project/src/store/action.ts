import {createAction} from '@reduxjs/toolkit';
import {options, locations} from '../const';
import {OfferType} from "../types/offers";

export const Action = {
  SET_CITY: 'main/setCity',
  SET_OFFERS_BY_CITY: 'main/setOffersByCity',
  SET_SORTING: 'sort/setSorting',
  SET_OFFERS_BY_OPTION: 'sort/setOffersByOption',
  LOAD_OFFERS: 'data/loadOffers',
};

export const setCityAction = createAction<locations>(Action.SET_CITY);
export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const setOptionAction = createAction<options>(Action.SET_SORTING);
export const setOffersByOptionAction = createAction(Action.SET_OFFERS_BY_OPTION);

export const loadOffers = createAction<OfferType[]>(Action.LOAD_OFFERS);
