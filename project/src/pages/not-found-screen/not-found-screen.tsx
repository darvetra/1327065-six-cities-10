import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">

      <Header />

      <main className="page__main">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
          <br />
          <br />
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
