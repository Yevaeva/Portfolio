import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import Main from './components/main/Main';
import NavBar from './components/navBar/NavBar';
import NotFound from './components/notFound/NotFound';
import React, { useEffect, useState } from 'react'
import Spinner from './components/spinner/Spinner';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';


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
            <Route path='/' exact><NavBar outerContainerId={"app"} /></Route>
            <Route path='/404' exact><NotFound /></Route>
            <Redirect to='/404' />
          </Switch>
          
          <About />
          <Education />
          <Skills />
          <Projects />
         
        </div>

      }
   

    </>
  );
}

export default App;
