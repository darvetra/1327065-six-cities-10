import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offers';
import {useAppSelector} from '../../hooks';
import {getSelectedOption} from '../../store/offer-process/selectors';
import {getSortedOffers} from '../../utils';

type OffersListProps = {
  offers: OfferType[],
  onHoverOfferChange?: (id: number) => void,
  offersListClass: string,
  offerCardClass: string,
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, onHoverOfferChange, offersListClass, offerCardClass} = props;

  const selectedOption = useAppSelector(getSelectedOption);
  const sortedOffers = getSortedOffers(offers, selectedOption);

  return (
    <div className={offersListClass}>
      {sortedOffers && sortedOffers.map((offer) => (
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
