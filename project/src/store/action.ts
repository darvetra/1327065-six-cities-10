import {createAction} from '@reduxjs/toolkit';

export const Action = {
  SET_CITY: 'main/setCity',
  SET_OFFERS_BY_CITY: 'main/setOffersByCity',
  SET_SORTING: 'sort/setSorting',
  SET_OFFERS_BY_OPTION: 'sort/setOffersByOption',
};

export const setCityAction = createAction<string>(Action.SET_CITY);
export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const setOptionAction = createAction<string>(Action.SET_SORTING);
export const setOffersByOptionAction = createAction(Action.SET_OFFERS_BY_OPTION);
