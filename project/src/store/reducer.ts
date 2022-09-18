import {createReducer} from '@reduxjs/toolkit';

import {getOffersByCity, sortPriceHigh, sortPriceLow, sortTopRatedFirst} from '../utils';
import {
  setCityAction,
  setOffersByCityAction,
  setOptionAction,
  setOffersByOptionAction,
  loadOffers,
  setDataLoadedStatus,
} from './action';

import {options, locations} from '../const';

import {OfferType} from '../types/offers';
import {MapSettings} from '../types/map';

const MAP_SETTINGS = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

type InitialState = {
  selectedCity: locations,
  offers: OfferType[],
  selectedOption: options,
  mapSettings: MapSettings,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  selectedCity: locations.Paris,
  offers: getOffersByCity([], locations.Paris),
  selectedOption: options.Popular,
  mapSettings: MAP_SETTINGS,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(state.offers, state.selectedCity);
    })
    .addCase(setOptionAction, (state, action) => {
      state.selectedOption = action.payload;
    })
    .addCase(setOffersByOptionAction, (state) => {
      switch (state.selectedOption) {
        case options.Popular:
          state.offers = getOffersByCity(state.offers, state.selectedCity);
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
          state.offers = getOffersByCity(state.offers, state.selectedCity);
      }
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
