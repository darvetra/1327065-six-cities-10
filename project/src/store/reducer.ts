import {createReducer} from '@reduxjs/toolkit';
import {setCityAction, setOffersByCityAction} from './action';
import {getOffersByCity} from '../utils';

import {offers} from '../mocks/offers';

const CURRENT_CITY = 'Paris';

const MAP_SETTINGS = {
  // latitude: 52.37454,
  // longitude: 4.897976,
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

const initialState = {
  selectedCity: CURRENT_CITY,
  offers: getOffersByCity(offers, CURRENT_CITY),
  mapSettings: MAP_SETTINGS,
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
