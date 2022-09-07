import {useState} from 'react';

import {useAppSelector} from '../../hooks';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';

import {OfferType} from '../../types/offers';
import {OfferCardStyles} from '../../const';

function MainScreen(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);

  const offersByCity = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const onHoverOfferChange = (id: number) => {
    const currentOffer = offersByCity.find((offer) =>
      offer.id === id
    );
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <Locations />

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {selectedCity}</b>

              <Sorting />

              <OffersList
                offers={offersByCity}
                onHoverOfferChange={onHoverOfferChange}
                offersListClass={OfferCardStyles.MainOffersListClass}
                offerCardClass={OfferCardStyles.MainOfferCardClass}
              />

            </section>
            <div className="cities__right-section">

              <Map
                offers={offersByCity}
                selectedOffer={selectedOffer}
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
