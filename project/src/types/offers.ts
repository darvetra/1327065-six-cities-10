export type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type HostType = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string,
}

export type CityType = {
  name: string,
  location: LocationType,
}

export type OfferType = {
  bedrooms: number,
  city: CityType,
  description: string,
  goods: string[],
  host: HostType,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: LocationType,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}
