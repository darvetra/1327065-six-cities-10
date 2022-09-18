import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {rootReducer} from '../root-reducer';

/**
 * Мы сконфигурировали историю и теперь надо понять как будем выполнять
 * перенаправление. Самый простой способ: подключить наш объект в нужное
 * место и при необходимости вызывать метод `push`.
 *
 * Способ рабочий, но не очень удобен. Было бы здорово завести для этого
 * отдельное действие и использовать точно также как и другие действия.
 *
 * Чтобы добиться такого поведения, создадим новую middleware, которую
 * назовём `redirect`, а затем подключим её в список middleware при
 * конфигурировании хранилища.
 *
 * После этого добавим новое действие — `redirectToRoute` и сразу опишем
 * для него функцию (в соответствии с паттерном «action creator»). Напомним,
 * при выполнении этого действия, будет выполняться перенаправление
 * пользователя на нужный маршрут.
 *
 * После описания действия, обновим асинхронное действие `loginAction`.
 * В случае успешной аутентификации перенаправим пользователя на маршрут
 * `/main`.
 */

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'main/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
