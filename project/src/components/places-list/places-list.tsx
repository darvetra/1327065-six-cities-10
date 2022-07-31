import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import {OfferType} from '../../types/hotel';

type PlacesListProps = {
  offers: OfferType[];
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  const [, setActiveCardId] = useState<number>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          hotel={offer}
          key={offer.id}
          onMouseOver={() => setActiveCardId(offer.id)}
        />)
      )}
    </div>
  );
}

export default PlacesList;
