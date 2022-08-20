import {createAction} from '@reduxjs/toolkit';

export const setCityAction = createAction('main/setCity', (value) => (
  {
    payload: value,
  }
));
