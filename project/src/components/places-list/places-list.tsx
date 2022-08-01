import PlaceCard from '../../components/place-card/place-card';
import {OfferType} from '../../types/offers';

type PlacesListProps = {
  offers: OfferType[],
  onHoverOfferChange?: (isActive: boolean, offer: OfferType) => void;
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers, onHoverOfferChange} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onHovered={onHoverOfferChange}
        />)
      )}
    </div>
  );
}

export default PlacesList;
