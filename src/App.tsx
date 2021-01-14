import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { About, Contact, Home, Navbar, Portfolio } from './components'

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #fefefa;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
