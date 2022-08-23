import {useState} from 'react';

import {options} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setOptionAction, setOffersByOptionAction} from '../../store/action';

function Sorting(): JSX.Element {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const selectedOption = useAppSelector((state) => state.selectedOption);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick = {() => setIsOptionsShow((prevItem) => !prevItem)}
      >
        {selectedOption}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style = {{'transform': isOptionsShow ? 'rotate(180deg) translateY(50%)' : 'translateY(-50%) rotate(0deg)'}}
        >
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {
        isOptionsShow ?
          <ul className="places__options places__options--custom places__options--opened">
            {
              Object.values(options).map((option) => (
                <li
                  className={selectedOption === option ?
                    'places__option places__option--active' :
                    'places__option'}
                  tabIndex={0}
                  key={option}
                  onClick={() => {
                    dispatch(setOptionAction(option));
                    setIsOptionsShow((prevItem) => !prevItem);
                    dispatch(setOffersByOptionAction());
                  }}
                >
                  {option}
                </li>
              ))
            }
          </ul> : null
      }
    </form>
  );
}

export default Sorting;
