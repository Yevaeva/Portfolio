import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import NotFound from './components/notFound/NotFound';
import React, { useEffect, useState } from 'react'
import Spinner from './components/spinner/Spinner';

import Portfolio from './components/Portfolio';



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (

    <>
      {loading ?
        <Spinner /> :
        <div id="app">
          <Switch>
            <Route path='/' exact component={Portfolio} />
            <Route path='/404' exact><NotFound /></Route>
            <Redirect to='/404' />
          </Switch>


        </div>

      }

    </>
  );
}

export default App;
