import {useState} from 'react';

import {useAppSelector} from '../../hooks';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Locations from '../../components/locations/locations';

import {MapSettings} from '../../types/map';
import {OfferType} from '../../types/offers';
import {OfferCardStyles, locations} from '../../const';

type MainScreenProps = {
  mapSettings: MapSettings,
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const {mapSettings} = props;

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

          <Locations locations={locations}/>

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <OffersList
                offers={offersByCity}
                onHoverOfferChange={onHoverOfferChange}
                offersListClass={OfferCardStyles.MainOffersListClass}
                offerCardClass={OfferCardStyles.MainOfferCardClass}
              />

            </section>
            <div className="cities__right-section">

              <Map
                mapSettings={mapSettings}
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
