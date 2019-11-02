import React from 'react';
import { Route, Link } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import ComplaintPage from './pages/ComplaintPage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <>
      <AppContainer />
      <div>
        <ul>
          <li><Link to="./pages/WeatherPage">Home</Link></li>
          <li><Link to="./pages/ComplaintPage">Complaints</Link></li>
        </ul>

        <Route path="/" exact component={WeatherPage} />
        <Route path="/complaints" exact component={ComplaintPage} />
      </div>
    </>
  );
}

export default App;