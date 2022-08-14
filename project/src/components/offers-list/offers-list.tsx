import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offers: OfferType[],
  onHoverOfferChange?: (id: number) => void,
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, onHoverOfferChange} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onHoverOfferChange={onHoverOfferChange}
        />)
      )}
    </div>
  );
}

export default OffersList;
