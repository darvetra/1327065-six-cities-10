import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, locations} from '../../const';
import {OfferData} from '../../types/state';
import {fetchOfferAction} from '../api-actions';
import {getOffersByCity} from '../../utils';


const initialState: OfferData = {
  offers: getOffersByCity([], locations.Paris),
  isDataLoaded: false,

};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      });
  }
});
