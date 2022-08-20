import {createReducer} from '@reduxjs/toolkit';
import {setCityAction} from './action';

const CURRENT_CITY = 'Paris';

const initialState = {
  selectedCity: CURRENT_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.selectedCity = action.payload;
    });
});

export {reducer};
