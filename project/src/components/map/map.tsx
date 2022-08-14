import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {MapSettings} from '../../types/map';
import {OfferType} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  mapSettings: MapSettings,
  offers: OfferType[],
  selectedOffer: OfferType | undefined,
};

function Map(props: MapProps): JSX.Element {
  const {mapSettings, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap({mapRef, mapSettings});

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      style={{height: '500px'}}
      ref={mapRef}
      className='cities__map map'
    />
  );
}

export default Map;
