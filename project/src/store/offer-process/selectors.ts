import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {MapSettings} from '../../types/map';

export const getSelectedCity = (state: State): string => state[NameSpace.Offer].selectedCity;
export const getSelectedOption = (state: State): string => state[NameSpace.Offer].selectedOption;
export const getMapSettings = (state: State): MapSettings => state[NameSpace.Offer].mapSettings;
