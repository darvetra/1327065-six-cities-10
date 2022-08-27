import {createAction} from '@reduxjs/toolkit';
import {options, locations} from '../const';
import {OfferType} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const Action = {
  SET_CITY: 'main/setCity',
  SET_OFFERS_BY_CITY: 'main/setOffersByCity',
  SET_ERROR: 'main/setError',
  SET_SORTING: 'sort/setSorting',
  SET_OFFERS_BY_OPTION: 'sort/setOffersByOption',
  LOAD_OFFERS: 'data/loadOffers',
  SET_DATA_LOADED_STATUS: 'data/setDataLoadedStatus',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
};

export const setCityAction = createAction<locations>(Action.SET_CITY);
export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const setOptionAction = createAction<options>(Action.SET_SORTING);
export const setOffersByOptionAction = createAction(Action.SET_OFFERS_BY_OPTION);

export const loadOffers = createAction<OfferType[]>(Action.LOAD_OFFERS);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const setDataLoadedStatus = createAction<boolean>(Action.SET_DATA_LOADED_STATUS);
