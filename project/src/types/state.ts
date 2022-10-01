import {store} from '../store';
import {AuthorizationStatus, locations, options} from '../const'
import {OfferType} from './offers';
import {MapSettings} from "./map";

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type OfferData = {
  offers: OfferType[],
  isDataLoaded: boolean,
};

export type OfferProcess = {
  selectedCity: locations,
  selectedOption: options,
  mapSettings: MapSettings,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
