export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = '../img/default-pin.svg';

export const URL_MARKER_CURRENT = '../img/current-pin.svg';

export enum OfferCardStyles {
  MainOffersListClass = 'cities__places-list places__list tabs__content',
  NeighbourhoodOffersListClass = 'near-places__list places__list',
  MainOfferCardClass = 'cities__card place-card',
  NeighbourhoodOfferCardClass = 'near-places__card place-card',
}
