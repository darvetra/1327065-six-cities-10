import {NameSpace} from '../../const'
import {State} from '../../types/state';

export const getSelectedCity = (state: State): string => state[NameSpace.Offer].selectedCity;
export const getSelectedOption = (state: State): string => state[NameSpace.Offer].selectedOption;
