import {createReducer} from '@reduxjs/toolkit';

import {setCityAction, setOffersByCityAction, setOptionAction, setOffersByOptionAction, loadOffers, requireAuthorization} from './action';
import {getOffersByCity, sortPriceHigh, sortPriceLow, sortTopRatedFirst} from '../utils';

import {options, locations, AuthorizationStatus} from '../const';

import {OfferType} from '../types/offers';
import {MapSettings} from '../types/map';

const MAP_SETTINGS = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

type InitalState = {
  selectedCity: locations,
  offers: OfferType[],
  selectedOption: options,
  mapSettings: MapSettings,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitalState = {
  selectedCity: locations.Paris,
  offers: getOffersByCity([], locations.Paris),
  selectedOption: options.Popular,
  mapSettings: MAP_SETTINGS,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(offers, state.selectedCity);
    })
    .addCase(setOptionAction, (state, action) => {
      state.selectedOption = action.payload;
    })
    .addCase(setOffersByOptionAction, (state) => {
      switch (state.selectedOption) {
        case options.Popular:
          state.offers = getOffersByCity(offers, state.selectedCity);
          break;
        case options.LowToHigh:
          state.offers = state.offers.slice().sort(sortPriceHigh);
          break;
        case options.HighToLow:
          state.offers = state.offers.slice().sort(sortPriceLow);
          break;
        case options.TopRatedFirst:
          state.offers = state.offers.slice().sort(sortTopRatedFirst);
          break;
        default:
          state.offers = getOffersByCity(offers, state.selectedCity);
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
