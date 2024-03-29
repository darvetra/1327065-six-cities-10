import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {OfferType} from '../../types/offers';
import {ReviewType} from '../../types/review';

import {calcRatingWidth, sortDayDown} from '../../utils';
import {OfferCardStyles, APIRoute, MAX_REVIEWS_NUMBER, AuthorizationStatus} from '../../const';

import {api} from '../../store';
import {useAppSelector} from '../../hooks';

import {getAuthorizationStatus} from '../../store/user-process/selectors';


function RoomScreen(): JSX.Element {
  const location = useLocation();
  const urlId = Number(location.pathname.split('/').slice(-1));

  const [offer, setOffer] = useState<OfferType>();
  const [offersNearby, setOffersNearby] = useState<OfferType[]>([]);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isData, setIsData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offerResult = await api.get<OfferType>(`${APIRoute.Offers}/${urlId}`);
        const offersNearbyResult = await api.get<OfferType[]>(`${APIRoute.Offers}/${urlId}/nearby`);
        const reviewsResult = await api.get<ReviewType[]>(`${APIRoute.Comments}/${urlId}`);
        setOffer(offerResult.data);
        setIsData(true);
        setOffersNearby(offersNearbyResult.data);
        setReviews(reviewsResult.data);
      } catch {
        setIsData(false);
      }
    };
    fetchData();

  }, [urlId]);

  const updateReviews = (data: ReviewType[]) => {
    setReviews(data);
  };

  const sortReviews = reviews.sort(sortDayDown).slice(0, MAX_REVIEWS_NUMBER);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    isData ?
      <div className="page">

        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer && offer.images.map((image) => (
                  <div className='property__image-wrapper' key={image}>
                    <img className='property__image' src={image} alt={offer.title} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer && offer.isPremium ?
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div> : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer && offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{'width': calcRatingWidth(offer !== undefined ? offer.rating : 0)}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer !== undefined ? offer.rating : 0}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer && offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer && offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer && offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer && offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {offer && offer.goods.map((good) => (
                      <li className='property__inside-item' key={good}>
                        {good}
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className='property__avatar user__avatar'
                        src={offer !== undefined ? offer.host.avatarUrl : ''}
                        width='74'
                        height='74'
                        alt={offer !== undefined ? offer.title : ''}
                      />
                    </div>
                    <span className="property__user-name">
                      {offer && offer.host.name}
                    </span>
                    <span className="property__user-status">
                      {offer && offer.host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer && offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortReviews.length}</span></h2>

                  <ReviewsList
                    reviews={sortReviews}
                  />

                  {
                    authorizationStatus === AuthorizationStatus.Auth ?
                      <ReviewForm id={urlId} updateReviews={updateReviews} /> : null
                  }

                </section>
              </div>
            </div>
            <section className='property__map map'>

              <Map
                offers={offer && [...offersNearby, offer]}
                selectedOffer={offer}
              />

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <OffersList
                offers={offersNearby}
                offersListClass={OfferCardStyles.NeighbourhoodOffersListClass}
                offerCardClass={OfferCardStyles.NeighbourhoodOfferCardClass}
              />

            </section>
          </div>
        </main>
      </div>
      : <NotFoundScreen />
  );
}

export default RoomScreen;
