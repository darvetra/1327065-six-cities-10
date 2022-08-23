import {createAction} from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'main/setCity',
  SET_OFFERS_BY_CITY: 'main/setOffersByCity',
};

export const setCityAction = createAction<string>(Action.SET_CITY);

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);
