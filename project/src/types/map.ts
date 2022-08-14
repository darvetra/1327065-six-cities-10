import {MutableRefObject} from 'react';

export type MapSettings = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type UseMapParams = {
  mapRef: MutableRefObject<HTMLElement | null>,
  mapSettings: MapSettings,
};
