import React from 'react';
import './App.css';
import Nav from './nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './footer';
import Albums from './albums/Albums';
import Login from './login/Login';
import notfound from './notfound';
import store from './store';
import Cities from './Cities/Cities';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Router>
      <Provider store={store}>
        <Nav />
        <div className="container main_container bg-white">
          <Switch>
         
              <Route path="/" exact component={Albums} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Login} />
              <Route path="/cities" exact component={Cities} />

            <Route component={notfound} />
          </Switch>
        </div>
        </Provider>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<div className="row">
  <div className="col-sm-8 bg-primary">1</div>
  <div className="col-sm-4 bg-secondary">2</div>
</div>
<div className="text-success">IKar.sy</div>
<div class="p-3 mb-2 bg-info text-white">.bg-info</div>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
*/
