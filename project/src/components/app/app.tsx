import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {OfferType} from '../../types/offers';
import {MapSettings} from '../../types/map';

import {AppRoute, AuthorizationStatus} from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  offers: OfferType[],
  mapSettings: MapSettings,
}

function App(props: AppScreenProps): JSX.Element {
  const {offers, mapSettings} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              mapSettings={mapSettings}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen favoriteOffers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <RoomScreen
              mapSettings={mapSettings}
              offers={offers}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
