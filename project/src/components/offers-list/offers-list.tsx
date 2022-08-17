import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offers';

type OffersListProps = {
  offers: OfferType[],
  onHoverOfferChange?: (id: number) => void,
  offersListClass: string,
  offerCardClass: string,
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, onHoverOfferChange, offersListClass, offerCardClass} = props;

  return (
    <div className={offersListClass}>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onHoverOfferChange={onHoverOfferChange}
          offerCardClass={offerCardClass}
        />)
      )}
    </div>
  );
}

export default OffersList;
