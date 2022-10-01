export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const MAX_REVIEWS_NUMBER = 10;
export const MAX_COMMENT_VALUE_LENGTH = 300;
export const MIN_COMMENT_VALUE_LENGTH = 50;

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

export enum OfferCardStyles {
  MainOffersListClass = 'cities__places-list places__list tabs__content',
  NeighbourhoodOffersListClass = 'near-places__list places__list',
  MainOfferCardClass = 'cities__card place-card',
  NeighbourhoodOfferCardClass = 'near-places__card place-card',
}

export enum locations {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum options {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}
