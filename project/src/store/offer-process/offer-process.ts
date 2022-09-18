import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, locations, options} from '../../const'
import {OfferProcess} from '../../types/state';


const MAP_SETTINGS = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

const initialState: OfferProcess = {
  selectedCity: locations.Paris,
  selectedOption: options.Popular,
  mapSettings: MAP_SETTINGS,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCityAction: (state, action) => {
      state.selectedCity = action.payload;
    },
    setOptionAction: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const {setCityAction, setOptionAction} = offerProcess.actions;
