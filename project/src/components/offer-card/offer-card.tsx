import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import {calcRatingWidth} from '../../utils';

type OfferCardProps = {
  offer: OfferType,
  onHoverOfferChange?: (id: number) => void,
}

function OfferCard(props: OfferCardProps): JSX.Element {
  const {offer, onHoverOfferChange} = props;
  const {id, title, isPremium, rating, type, price, previewImage} = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => onHoverOfferChange && onHoverOfferChange(id)}
    >
      {isPremium ?
        <div className='place-card__mark'>
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{'width': calcRatingWidth(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
