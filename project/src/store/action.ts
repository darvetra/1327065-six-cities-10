import {createAction} from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'main/setCity',
  SET_OFFERS_BY_CITY: 'main/setOffersByCity',
};

export const setCityAction = createAction(Action.SET_CITY, (value) => (
  {
    payload: value,
  }
));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);
