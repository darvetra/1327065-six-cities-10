import {ReviewType} from '../types/review';

export const reviews: ReviewType[] = [
  {
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 4,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2022-06-13T12:25:36.938Z'
  },
  {
    id: 2,
    user: {
      id: 15,
      isPro: false,
      name: 'Jason',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 3,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :). A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2021-06-11T12:25:36.938Z'
  },
  {
    id: 3,
    user: {
      id: 13,
      isPro: true,
      name: 'Jakobe',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/1.jpg'
    },
    rating: 2,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2020-04-13T12:25:36.938Z'
  },
];
