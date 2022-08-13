// import {useRef, useEffect} from 'react';
import {useRef} from 'react';
// import {Icon, Marker} from 'leaflet';
// import {Icon} from 'leaflet';
import useMap from '../../hooks/use-map';
import {MapSettings} from '../../types/map';
// import {OfferType} from '../../types/offers';
// import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

// const defaultCustomIcon = new Icon({
//   iconUrl: URL_MARKER_DEFAULT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

type MapProps = {
  mapSettings: MapSettings,
  // offers: OfferType[],
};

function Map(props: MapProps): JSX.Element {
  // const {mapSettings, offers} = props;
  const {mapSettings} = props;

  const mapRef = useRef(null);
  /* eslint-disable no-alert, no-console */
  /* eslint-disable */
  const map = useMap({ mapRef, mapSettings });

  // useEffect(() => {
  //   if (map) {
  //     offers.forEach((offer) => {
  //       const marker = new Marker({
  //         lat: offer.location.latitude,
  //         lng: offer.location.longitude,
  //       });
  //
  //       marker
  //         .setIcon(
  //           defaultCustomIcon
  //         )
  //         .addTo(map);
  //     });
  //   }
  // }, [map, offers]);

  // return <section style={{height: '500px'}} ref={mapRef} className='cities__map map'></section>;
  // return <section style={{height: '500px'}} ref={mapRef} className='cities__map map'></section>;
  return <section style={{height: '600px'}} ref={mapRef} className=''></section>;

}

export default Map;
