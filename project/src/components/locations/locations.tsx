import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCityAction, setOffersByCityAction} from '../../store/action';

type LocationsProps = {
  locations: string[];
}

function Locations(props: LocationsProps) {
  const {locations} = props;

  const selectedCity = useAppSelector((state) => state.selectedCity);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {locations.map((location) => (
          <li
            className='locations__item'
            key={location}
          >
            <Link
              className={
                selectedCity === location ?
                  'locations__item-link tabs__item tabs__item--active' :
                  'locations__item-link tabs__item'
              }
              to='/'
              onClick={() => {
                dispatch(setCityAction(location));
                dispatch(setOffersByCityAction());
              }}
            >
              <span>{location}</span>
            </Link>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default Locations;
