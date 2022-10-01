import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCityAction, setOptionAction} from '../../store/offer-process/offer-process';
import {getSelectedCity} from '../../store/offer-process/selectors';
import {locations, options} from '../../const';

function Locations(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">

        {Object.values(locations).map((location) => (
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
                dispatch(setOptionAction(options.Popular));
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
