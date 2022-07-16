import MainScreen from '../../pages/main-screen/main-screen';
import {HotelType} from '../../types/hotel';

type AppScreenProps = {
  hotels: HotelType[];
}

function App({hotels}: AppScreenProps): JSX.Element {
  return (
    <MainScreen hotels={hotels}/>
  );
}

export default App;
