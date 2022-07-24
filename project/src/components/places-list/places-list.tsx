import PlaceCard from '../../components/place-card/place-card';

import {HotelType} from '../../types/hotel';

type PlacesListProps = {
  offers: HotelType[];
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard hotel={offer} key={offer.id} />)}
    </div>
  );
}

export default PlacesList;
