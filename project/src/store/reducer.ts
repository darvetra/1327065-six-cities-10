import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, setOffersByCityAction} from './action';
import {getOffersByCity} from '../utils';

import {offers} from '../mocks/offers';

const CURRENT_CITY = 'Paris';

const initialState = {
  selectedCity: CURRENT_CITY,
  offers: getOffersByCity(offers, CURRENT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(offers, state.selectedCity);
    });
});

export {reducer};
