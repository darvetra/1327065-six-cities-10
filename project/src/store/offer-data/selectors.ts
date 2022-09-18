import {NameSpace} from '../../const'
import {State} from '../../types/state';
import {OfferType} from '../../types/offers';
import {createSelector} from '@reduxjs/toolkit';
import {getSelectedCity} from '../offer-process/selectors';
import {getOffersByCity} from '../../utils';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const filterOffers = createSelector(
  [getOffers, getSelectedCity],
  (offers, selectedCity) => getOffersByCity(offers, selectedCity)
);
