import {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {UseMapParams} from '../types/map';


function useMap(params: UseMapParams): Map | null {
  const {mapRef, mapSettings} = params;
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (isRenderedRef.current && map !== null) {
      map.setView({
        lat: mapSettings.latitude,
        lng: mapSettings.longitude,
      },
      map.getZoom());
    }

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: mapSettings.latitude,
          lng: mapSettings.longitude,
        },
        zoom: mapSettings.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, mapSettings]);

  return map;
}

export default useMap;
